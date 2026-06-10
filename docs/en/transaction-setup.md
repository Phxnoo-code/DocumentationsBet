# 💳 Transaction Settings

A page for controlling cash flow on the website, defining minimum deposit and withdrawal limits, configuring shortcut buttons on the member portal, and managing security mechanisms to prevent fraudulent or unusual withdrawals.

## 📍 How to access this menu
* **Go to:** Left Menu > **"Finance"** > Select **"Transaction Settings"**

---

## ⚙️ 1. Deposit, Withdrawal, & Quick Buttons

Manage the financial limits and criteria for member cash operations:

* **Min Deposit / Min Withdrawal:** The minimum amount required for the system to process a transaction. (It is recommended to align these with your Payment Gateway thresholds).
* **Min Withdrawal Requiring Approval:** A safety threshold to restrict automatic withdrawals. For example, if set to `5000`, any withdrawal request exceeding 5,000 THB will bypass auto-payout and queue up for manual review and approval by an admin. (If left blank, all amounts will be processed automatically).
* **Withdrawal Risk Multiplier:** Anti-cheat logic calculated as a multiple of the member's last deposit. For example, if set to `2` and a customer deposits 100 THB, if they win and request a withdrawal exceeding 200 THB (100 × 2), the system places the request on hold for admin investigation.
* **Quick Deposit Buttons:** Numeric values that display as quick-select buttons on the front-end deposit interface (e.g., buttons for 100, 300, 500 THB).

> ⚠️ **Quick Deposit Buttons Warning:**
> When entering numbers for quick deposit buttons, **separate each amount with a comma ( , ) or a space only**. Do not enter other characters, otherwise the buttons on the front-end will render incorrectly.

---

## 🎁 2. Activity Claim Thresholds

Configure parameters for the bonus wallets. This determines the minimum balance a member must accumulate from promotions or activities before they can transfer (claim) the funds into their main wallet for betting or withdrawal:

* **Supported Activities:** Commission, Daily Check-in, Referral, Partner, Loss Rebates, and Lucky Wheel.
* **How it works:** If set to `0`, members can claim their rewards immediately regardless of the amount. If set to `100`, the member must accumulate at least 100 THB from that activity before the "Claim" button becomes active.

---

## 📌 Important Notes Before Closing
* After modifying any minimum transaction thresholds or quick deposit amounts, **always scroll up and click the "Save" button in the top-right corner** to apply the financial logic and update the front-end buttons in real-time.
