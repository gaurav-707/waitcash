import { NextRequest, NextResponse } from 'next/server';
import { verifyAdToken } from '@/lib/crypto';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { error: 'Missing cryptographic verification token' },
        { status: 400 }
      );
    }

    // 1. Cryptographically verify signature, dwell time (>= 4800ms), and replay protection
    const verification = verifyAdToken(token);

    if (!verification.valid || !verification.payload) {
      return NextResponse.json(
        {
          success: false,
          error: verification.error || 'Cryptographic verification failed',
        },
        { status: 403 }
      );
    }

    const { adId, deviceId, cpm } = verification.payload;

    // 2. Calculate 50% user revenue share
    // e.g. $12.00 CPM / 1000 = $0.012 gross per impression
    // User gets 50% = $0.006 net cash
    const grossPerImpression = cpm / 1000;
    const userEarned = +(grossPerImpression * 0.5).toFixed(4);

    return NextResponse.json(
      {
        success: true,
        adId,
        deviceId,
        creditedAmount: userEarned,
        userSharePercent: 50,
        currency: 'USD',
        status: 'VERIFIED_QUALIFIED',
        timestamp: Date.now(),
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'X-WaitCash-Verified': 'true',
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Invalid payload structure: ' + err.message },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Device-Id',
    },
  });
}
