/**
 * WaitCash — Content Script
 * Injected into chatgpt.com, claude.ai, and gemini.google.com
 *
 * PRIVACY & SECURITY GUARANTEE:
 * 1. This script NEVER reads prompt text, messages, or code.
 * 2. It communicates exclusively via cryptographically signed tokens.
 */

(() => {
  let activeAdElement = null;
  let dwellTimer = null;
  let impressionRecorded = false;
  let currentToken = null;
  let currentAdId = null;

  const HOSTNAME = window.location.hostname;

  function isGenerating() {
    if (HOSTNAME.includes('chatgpt.com')) {
      return !!(
        document.querySelector('button[data-testid="stop-button"]') ||
        document.querySelector('button[aria-label*="Stop"]') ||
        document.querySelector('.result-thinking')
      );
    }

    if (HOSTNAME.includes('claude.ai')) {
      return !!(
        document.querySelector('button[aria-label*="Stop"]') ||
        document.querySelector('[data-is-streaming="true"]')
      );
    }

    if (HOSTNAME.includes('gemini.google.com')) {
      return !!(
        document.querySelector('button[aria-label*="Stop response"]') ||
        document.querySelector('.loading-indicator')
      );
    }

    return false;
  }

  function findInsertionTarget() {
    if (HOSTNAME.includes('chatgpt.com')) {
      const composerForm = document.querySelector('form');
      if (composerForm && composerForm.parentElement) {
        return { parent: composerForm.parentElement, before: composerForm };
      }
    }

    if (HOSTNAME.includes('claude.ai')) {
      const composer = document.querySelector('fieldset') || document.querySelector('form');
      if (composer && composer.parentElement) {
        return { parent: composer.parentElement, before: composer };
      }
    }

    if (HOSTNAME.includes('gemini.google.com')) {
      const inputArea = document.querySelector('.input-area-container') || document.querySelector('input-area');
      if (inputArea && inputArea.parentElement) {
        return { parent: inputArea.parentElement, before: inputArea };
      }
    }

    return null;
  }

  async function injectAdCard() {
    if (activeAdElement || document.getElementById('waitcash-sponsor-card')) {
      return;
    }

    chrome.runtime.sendMessage({ type: 'GET_ACTIVE_AD' }, (response) => {
      if (!response || !response.ad) return;

      const { ad, token } = response;
      currentAdId = ad.id;
      currentToken = token;
      impressionRecorded = false;

      const target = findInsertionTarget();
      if (!target) return;

      activeAdElement = document.createElement('div');
      activeAdElement.id = 'waitcash-sponsor-card';
      activeAdElement.innerHTML = `
        <div class="waitcash-card-inner">
          <div class="waitcash-left">
            <span class="waitcash-badge">Sponsored via WaitCash</span>
            <a href="${ad.url}" target="_blank" rel="noopener noreferrer" class="waitcash-text-link">
              <span class="waitcash-brand-name">${ad.title}:</span>
              <span class="waitcash-tagline">${ad.tagline}</span>
            </a>
          </div>
          <div class="waitcash-right">
            <span class="waitcash-earning-pill">+50% Split</span>
            <button class="waitcash-dismiss-btn" title="Dismiss" aria-label="Dismiss">&times;</button>
          </div>
        </div>
      `;

      target.parent.insertBefore(activeAdElement, target.before);

      // Handle close
      const dismissBtn = activeAdElement.querySelector('.waitcash-dismiss-btn');
      if (dismissBtn) {
        dismissBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          removeAdCard();
        });
      }

      // Track 5-second dwell time via IntersectionObserver
      startDwellTimer(activeAdElement, token, ad.id);
    });
  }

  function startDwellTimer(element, token, adId) {
    if (dwellTimer) clearTimeout(dwellTimer);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (!impressionRecorded && !dwellTimer) {
              dwellTimer = setTimeout(() => {
                recordImpression(token, adId);
                impressionRecorded = true;
              }, 5000); // Strict 5-second dwell verification
            }
          } else {
            if (dwellTimer && !impressionRecorded) {
              clearTimeout(dwellTimer);
              dwellTimer = null;
            }
          }
        });
      },
      { threshold: [0.5] }
    );

    observer.observe(element);
  }

  function recordImpression(token, adId) {
    chrome.runtime.sendMessage(
      {
        type: 'RECORD_QUALIFIED_IMPRESSION',
        token: token,
        adId: adId,
        timestamp: Date.now(),
      },
      (res) => {
        if (res && res.success) {
          if (activeAdElement) {
            const pill = activeAdElement.querySelector('.waitcash-earning-pill');
            if (pill) {
              pill.textContent = `Earned +$${res.creditedAmount || '0.006'} ✓`;
              pill.classList.add('waitcash-earned');
            }
          }
        }
      }
    );
  }

  function removeAdCard() {
    if (dwellTimer) {
      clearTimeout(dwellTimer);
      dwellTimer = null;
    }
    if (activeAdElement) {
      activeAdElement.remove();
      activeAdElement = null;
    }
  }

  // MutationObserver for generation states
  let isGenState = false;
  const observer = new MutationObserver(() => {
    const currentlyGenerating = isGenerating();
    if (currentlyGenerating && !isGenState) {
      isGenState = true;
      injectAdCard();
    } else if (!currentlyGenerating && isGenState) {
      isGenState = false;
      setTimeout(() => {
        if (!isGenerating()) {
          removeAdCard();
        }
      }, 5000);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
