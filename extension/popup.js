document.addEventListener('DOMContentLoaded', () => {
  const balanceDisplay = document.getElementById('balanceDisplay');
  const impressionsCount = document.getElementById('impressionsCount');
  const progressBar = document.getElementById('progressBar');
  const payoutProgressPercent = document.getElementById('payoutProgressPercent');
  const cashOutBtn = document.getElementById('cashOutBtn');

  const PAYOUT_MINIMUM = 10.0;

  chrome.runtime.sendMessage({ type: 'GET_USER_STATS' }, (stats) => {
    if (!stats) return;

    const balance = stats.balance || 0.0;
    const impressions = stats.impressions || 0;

    balanceDisplay.textContent = `$${balance.toFixed(2)}`;
    impressionsCount.textContent = impressions.toLocaleString();

    const percent = Math.min(100, Math.round((balance / PAYOUT_MINIMUM) * 100));
    progressBar.style.width = `${percent}%`;
    payoutProgressPercent.textContent = `${percent}%`;

    if (balance >= PAYOUT_MINIMUM) {
      cashOutBtn.disabled = false;
      cashOutBtn.textContent = 'Claim Payout via Whop →';
      cashOutBtn.addEventListener('click', () => {
        chrome.tabs.create({ url: 'https://whop.com' });
      });
    }
  });
});
