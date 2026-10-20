import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { signAdToken } from '@/lib/crypto';

const ACTIVE_SPONSORS = [
  {
    id: 'ad_raycast_01',
    title: 'Raycast AI',
    tagline: 'The fastest way to code, search, and control your Mac →',
    url: 'https://raycast.com/?ref=waitcash',
    cpm: 12.0,
  },
  {
    id: 'ad_supabase_02',
    title: 'Supabase',
    tagline: 'Build in a weekend, scale to millions. Postgres made simple →',
    url: 'https://supabase.com/?ref=waitcash',
    cpm: 10.0,
  },
  {
    id: 'ad_cursor_03',
    title: 'Cursor',
    tagline: 'The AI Code Editor built for productivity →',
    url: 'https://cursor.com/?ref=waitcash',
    cpm: 14.0,
  },
  {
    id: 'ad_neon_04',
    title: 'Neon Postgres',
    tagline: 'Serverless Postgres with instant branching & auto-suspend →',
    url: 'https://neon.tech/?ref=waitcash',
    cpm: 11.0,
  },
];

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const deviceId = url.searchParams.get('deviceId') || 'anonymous_' + crypto.randomBytes(6).toString('hex');

  // Select an active sponsor
  const ad = ACTIVE_SPONSORS[Math.floor(Math.random() * ACTIVE_SPONSORS.length)];

  // Cryptographically sign the impression opportunity with HMAC-SHA256
  const nonce = crypto.randomBytes(16).toString('hex');
  const token = signAdToken({
    adId: ad.id,
    deviceId,
    issuedAt: Date.now(),
    nonce,
    cpm: ad.cpm,
  });

  return NextResponse.json(
    {
      ad,
      token, // Signed cryptographic authorization token
      issuedAt: Date.now(),
      minDwellMs: 5000,
      encrypted: true,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store, max-age=0',
        'X-WaitCash-Security': 'HMAC-SHA256',
      },
    }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Device-Id',
    },
  });
}
