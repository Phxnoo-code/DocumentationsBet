# 🎁 Promotion Analysis

A page for tracking and evaluating the results of marketing campaigns. The system aggregates promotion claims, turnover statistics, deposit amounts, and net profit/loss for each campaign within the selected date range to give website owners insight into maximum cost-effectiveness.

## 🔐 Admin Permissions
* Admins must have permissions in the **"ดูรายงาน/สรุปภาพรวม"** (View Reports/Overview) category or the **"การตลาดและการเงิน"** (Marketing and Finance) department to access the screen and view the statistics in this section.

## 📍 How to access this page
* **Go to:** Admin Menu > **"สรุปภาพรวม"** (Overview Summary) > Select submenu **"วิเคราะห์โปรโมชั่น"** (Promotion Analysis)

## 🖥️ Screen Details

### 1. Overview Summary Cards
Cards summarizing data at the top of the dashboard, providing a quick glance at overall campaign activity:
![Image description](/images/image-1.png)
* **💡 Promotions on this page:** Total number of active promotion campaigns displayed on the screen (e.g., 3 campaigns).
* **💡 Unique Members:** Total number of unique players who have claimed promotions from the current page data.
* **💡 Total Claims:** Statistics of total claims in the system, clearly showing how many times members passed/failed turnover requirements.
* **💡 Total Profit:** Net profit the website made from members participating in campaigns, with cumulative deposits linked to promotions shown below.

---

### 2. Data Filter Panel
Main controls for searching and filtering timeframes based on actual promotion claims and turnover:
* **🔍 Search Promotion:** A search box to filter campaigns by **"Promotion Name"** to view results immediately.
* **🔍 Date Range:** A calendar menu to set the start and end dates for fetching statistics.
* **🔍 Sort Data (Dropdown):** A button to sort the table data according to your preference, such as sorting by **"Max Profit"**.
* **🔍 Quick Timeframe Shortcuts:** One-click shortcut buttons, including **"All"** and **"Last 30 Days"**.

---

### 📊 3. Data Table / Grid View

* **Sample table display in back-office:**

| Promotion Name | Type | Members | Total Claims / Turnover Status | Profit / Average (THB) |
| :--- | :---: | :---: | :--- | :---: |
| **New Member Double Deposit** | `For Members` | 0 | **0 times (0 passed turnover)**<br>• Passed: 0 times<br>• Failed: 0 times | ฿0<br>Average ฿0 |
| **Deposit 100 Get 300** | `For Members` | 0 | **0 times (0 passed turnover)**<br>• Passed: 0 times<br>• Failed: 0 times | ฿0<br>Average ฿0 |
| **20% Deposit Bonus** | `For Members` | 0 | **0 times (0 passed turnover)**<br>• Passed: 0 times<br>• Failed: 0 times | ฿0<br>Average ฿0 |

Detailed report showing performance by promotion campaign. Admins can toggle between **"Table"** and **"Grid"** views using the button at the top-right of the section:

* **💡 Promotion Name / Type:** Shows the campaign name (e.g., New Member Double Deposit) and the target group label (e.g., For Members).
* **💡 Members:** Count of players who claimed that specific promotion.
* **💡 Total Claims / Turnover Status:** Summarizes total claims and breaks down passed vs. failed turnover counts.
* **💡 Profit / Average (THB):** Net amount the website earned from the promotion, with average profit per member calculated.
