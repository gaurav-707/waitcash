/**
 * WaitCash — Background Service Worker (Manifest V3)
 * Manages device identity, encrypted ad token retrieval, and local balance ledger
 */

const API_BASE = 'http://localhost:3000/api/v1/ads';

// Fallback pool of sponsors in case of offline/network interruption
const FALLBACK_ADS = [
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

// Initialize storage state on installation
chrome.runtime.onInstalled.addListener(async () => {
  const data = await chrome.storage.local.get(['deviceId', 'balance', 'impressions', 'enabled']);

  if (!data.deviceId) {
    const randomId = 'wc_' + Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
    await chrome.storage.local.set({
      deviceId: randomId,
      balance: 0.0,
      impressions: 0,
      enabled: true,
      lastPayoutRequest: null,
    });
  }
});

// Message listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_ACTIVE_AD') {
    handleGetActiveAd(sendResponse);
    return true; // Keep channel open for async response
  }

  if (request.type === 'RECORD_QUALIFIED_IMPRESSION') {
    handleRecordImpression(request.token, request.adId, sendResponse);
    return true;
  }

  if (request.type === 'GET_USER_STATS') {
    chrome.storage.local.get(['deviceId', 'balance', 'impressions', 'enabled'], (items) => {
      sendResponse(items);
    });
    return true;
  }
});

async function handleGetActiveAd(sendResponse) {
  const settings = await chrome.storage.local.get(['enabled', 'deviceId']);
  if (settings.enabled === false) {
    sendResponse({ ad: null });
    return;
  }

  try {
    // Attempt to fetch fresh signed ad from server
    const res = await fetch(`${API_BASE}/serve?deviceId=${settings.deviceId || 'anon'}`);
    if (res.ok) {
      const data = await res.json();
      sendResponse({ ad: data.ad, token: data.token });
      return;
    }
  } catch (err) {
    // Offline fallback
  }

  const selectedAd = FALLBACK_ADS[Math.floor(Math.random() * FALLBACK_ADS.length)];
  sendResponse({
    ad: selectedAd,
    token: `fallback_${selectedAd.id}_${Date.now()}`,
  });
}

async function handleRecordImpression(token, adId, sendResponse) {
  let creditedAmount = 0.006;

  try {
    // Ping backend with cryptographic verification token
    const res = await fetch(`${API_BASE}/impression`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.creditedAmount) {
        creditedAmount = data.creditedAmount;
      }
    }
  } catch (err) {
    // Graceful offline credit
  }

  const current = await chrome.storage.local.get(['balance', 'impressions']);
  const newBalance = (current.balance || 0) + creditedAmount;
  const newImpressions = (current.impressions || 0) + 1;

  await chrome.storage.local.set({
    balance: parseFloat(newBalance.toFixed(4)),
    impressions: newImpressions,
  });

  sendResponse({
    success: true,
    creditedAmount: parseFloat(creditedAmount.toFixed(4)),
    newBalance: parseFloat(newBalance.toFixed(4)),
    impressions: newImpressions,
  });
}
