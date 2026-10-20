# WaitCash.ai ⚡

> **The Attention Layer for Generative AI.**  
> Monetize the "thinking gap" during AI model latency with a non-intrusive, verified sponsored line. 50/50 revenue share in real USD.

[![Open Source](https://img.shields.io/badge/Open%20Source-100%25-brightgreen.svg)](https://github.com/gaurav-707/waitcash)
[![Manifest V3](https://img.shields.io/badge/Chrome%20Extension-Manifest%20V3-blue.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Security](https://img.shields.io/badge/Security-HMAC--SHA256%20Signed-cyan.svg)](#security-architecture)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Overview

When frontier AI models like **ChatGPT (o1/o3/GPT-4o)**, **Claude (3.5/3.7 Sonnet)**, or **Google Gemini** generate responses, users spend **10 to 30 seconds** staring at a blank screen or a loading spinner.

**WaitCash** places a single, subtle, dismissible sponsored text recommendation in that idle whitespace. 
* Advertisers pay on a **CPM ($8 – $15)** basis to reach focused engineers and tech workers.
* **We share 50% of the revenue directly with you in real USD**, deposited straight to your bank account or Whop wallet.

---

## 🛡️ Zero-Trust Security Standard

Unlike legacy wait-state projects that suffered backlash for modifying local terminal configurations (`~/.claude/settings.json`) or shipping closed-source binaries:

1. **100% Browser Sandboxed:** Runs exclusively inside Chrome's isolated extension sandbox via Manifest V3. Zero access to local OS, terminal, SSH keys, or `.env` files.
2. **Zero Prompt Reading:** The content script strictly observes layout mutation states (e.g. presence of the stop button) without ever reading, storing, or transmitting prompt text or code.
3. **Cryptographic Verification:** Every impression is validated with an **HMAC-SHA256** signed token ensuring a verified **5-second dwell time** before any revenue is credited.

---

## 🚀 Quick Start

### 1. Clone & Run the Web Application

```bash
git clone https://github.com/gaurav-707/waitcash.git
cd waitcash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the live landing page, earnings calculator, and interactive simulator.

### 2. Install the Chrome Extension Locally

1. Open Google Chrome and navigate to:
   ```
   chrome://extensions
   ```
2. Enable **Developer mode** in the top right corner.
3. Click **Load unpacked**.
4. Select the `extension/` folder inside this repository.
5. Open [ChatGPT](https://chatgpt.com), [Claude](https://claude.ai), or [Gemini](https://gemini.google.com) and send any prompt to see the live extension in action!

---

## 🔐 Encrypted Backend & API Architecture

The backend provides two primary endpoints with built-in HMAC-SHA256 cryptographic signing and replay attack protection:

### `GET /api/v1/ads/serve?deviceId={id}`
* Selects a high-intent developer sponsor from the rotation pool.
* Generates a unique `nonce` and issues a cryptographically signed HMAC-SHA256 token encoding `{ adId, deviceId, issuedAt, cpm, nonce }`.

### `POST /api/v1/ads/impression`
* Receives `{ token }` from the client after the 5-second `IntersectionObserver` dwell timer has elapsed.
* Validates:
  1. **Constant-time signature verification** (preventing timing attacks).
  2. **Dwell time constraint** (`currentTime - issuedAt >= 5000ms`).
  3. **Replay protection** (rejects re-used nonces).
  4. **Token expiration** (invalidates tokens older than 120s).
* Accrues 50% revenue share (`(cpm / 1000) * 0.5`) to the user's ledger.

---

## 💳 Payment Gateway & Money Flow

```
┌─────────────────┐             ┌─────────────────────┐             ┌────────────────┐
│   Advertiser    │             │   WaitCash Admin    │             │   End User     │
└────────┬────────┘             └──────────┬──────────┘             └────────┬───────┘
         │                                 │                                 │
         │ Pays $12.00 CPM (1,000 views)   │                                 │
         │────────────────────────────────►│                                 │
         │                                 ├── Net Received: $11.40          │
         │                                 ├── Founder Share (50%): $5.70    │
         │                                 └── User Share (50%): $5.70       │
         │                                 │                                 │
         │                                 │ Automated Cashout ($10 Min)     │
         │                                 │────────────────────────────────►│
         │                                 │ (Whop / PayPal / Indian UPI)    │
```

1. **Advertiser Inflow:** Advertisers fund campaigns using **Stripe**, **Dodo Payments**, or **Skydo (US ACH Virtual Accounts)**.
2. **Ledger Allocation:** The backend logs gross revenues and allocates exactly 50% to user balances.
3. **User Outflow:** Once the \$10 threshold is reached, payouts are disbursed via **Whop** (supporting global bank accounts and PayPal) or **UPI** (for India).

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

Developed with transparency by [@gaurav-707](https://github.com/gaurav-707).
