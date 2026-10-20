import crypto from 'crypto';

// Secret key for HMAC signing and AES encryption (falls back to secure random if env unset)
const HMAC_SECRET = process.env.WAITCASH_HMAC_SECRET || 'waitcash_prod_secret_f8b1a3d90e2c478a51b962d31c4f58e7';
const ENCRYPTION_KEY = crypto.scryptSync(HMAC_SECRET, 'salt_waitcash_2026', 32);

// Replay protection: cache of seen nonces within validity window
const usedNonces = new Set<string>();

// Periodic cleanup of expired nonces (every 5 minutes)
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    usedNonces.clear();
  }, 5 * 60 * 1000);
}

export interface AdTokenPayload {
  adId: string;
  deviceId: string;
  issuedAt: number;
  nonce: string;
  cpm: number;
}

/**
 * Signs an ad impression token with HMAC-SHA256
 */
export function signAdToken(payload: AdTokenPayload): string {
  const json = JSON.stringify(payload);
  const base64Payload = Buffer.from(json).toString('base64url');
  const signature = crypto
    .createHmac('sha256', HMAC_SECRET)
    .update(base64Payload)
    .digest('base64url');

  return `${base64Payload}.${signature}`;
}

/**
 * Cryptographically verifies token integrity, expiration, dwell time, and replay attack protection
 */
export function verifyAdToken(
  token: string,
  minDwellMs: number = 4800 // ~5 seconds allowing for minor network jitter
): { valid: boolean; payload?: AdTokenPayload; error?: string } {
  try {
    const parts = token.split('.');
    if (parts.length !== 2) {
      return { valid: false, error: 'Malformed token structure' };
    }

    const [base64Payload, signature] = parts;

    // 1. Verify HMAC Signature (Constant-Time to prevent timing attacks)
    const expectedSignature = crypto
      .createHmac('sha256', HMAC_SECRET)
      .update(base64Payload)
      .digest('base64url');

    const sigBuf = Buffer.from(signature);
    const expectedBuf = Buffer.from(expectedSignature);

    if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
      return { valid: false, error: 'Cryptographic signature mismatch. Token has been tampered with.' };
    }

    // 2. Decode payload
    const payloadStr = Buffer.from(base64Payload, 'base64url').toString('utf-8');
    const payload: AdTokenPayload = JSON.parse(payloadStr);

    const now = Date.now();

    // 3. Replay Protection: Check if nonce was already consumed
    if (usedNonces.has(payload.nonce)) {
      return { valid: false, error: 'Replay attack detected. Token has already been consumed.' };
    }

    // 4. Expiration check: tokens expire after 120 seconds
    const TOKEN_MAX_AGE_MS = 120 * 1000;
    if (now - payload.issuedAt > TOKEN_MAX_AGE_MS) {
      return { valid: false, error: 'Token expired (older than 120 seconds).' };
    }

    // 5. Enforce 5-Second Dwell Time requirement
    const elapsed = now - payload.issuedAt;
    if (elapsed < minDwellMs) {
      return {
        valid: false,
        error: `Insufficient dwell time. ${elapsed}ms passed, minimum required is ${minDwellMs}ms.`
      };
    }

    // Mark nonce as consumed
    usedNonces.add(payload.nonce);

    return { valid: true, payload };
  } catch (err: any) {
    return { valid: false, error: `Token verification error: ${err.message}` };
  }
}

/**
 * AES-256-GCM authenticated encryption for sensitive payloads (bank account / payout requests)
 */
export function encryptPayload(plaintext: string): { iv: string; ciphertext: string; tag: string } {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', ENCRYPTION_KEY, iv);

  let ciphertext = cipher.update(plaintext, 'utf8', 'hex');
  ciphertext += cipher.final('hex');

  const tag = cipher.getAuthTag().toString('hex');

  return {
    iv: iv.toString('hex'),
    ciphertext,
    tag,
  };
}

/**
 * AES-256-GCM authenticated decryption
 */
export function decryptPayload(encrypted: { iv: string; ciphertext: string; tag: string }): string {
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    ENCRYPTION_KEY,
    Buffer.from(encrypted.iv, 'hex')
  );
  decipher.setAuthTag(Buffer.from(encrypted.tag, 'hex'));

  let plaintext = decipher.update(encrypted.ciphertext, 'hex', 'utf8');
  plaintext += decipher.final('utf8');

  return plaintext;
}
