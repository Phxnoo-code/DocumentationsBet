#  Dashboard 

Dashboard is the main menu of the website. It shows all the statistics of the website.

## 🔐 Admin Permissions 

* Admin must have permission in the **"ดูแดชบอร์ด"** category or be authorized in the **"การเงิน"** system to access the screen and view the overall statistics, cash flow, and net profit in this section.

## 📍 How to access this page 

* **Go to:** Admin Menu > **"สรุปภาพรวม"** > Select submenu **"แดชบอร์ด"**

## 🖥️ What does the screen show?

* **Data Filter:** Adjust the date range you want to view the report for (Today, Yesterday, 7 days, This month)
* **Summary of Main Funds and Members:** Shows total deposits, total withdrawals, net profit, and new member behavior.
    ![คำอธิบายรูปภาพ](/images/image-6.png)
    * *📌 There is a button **"ดูผู้เล่นที่มียอดฝาก"***
    * *📌 There is a button **"ดูผู้เล่นที่มียอดถอน"***
    * *📌 There is a button **"ดูผู้เล่นที่สมัครใหม่"**
* **Deep Dive into Deposits:** Breakdown of deposit amounts by promotion usage 
    * *📌 There is a button **"ดูผู้ใช้ที่ฝากเงินเเบบไม่รับโปร"***
    * *📌 There is a button **"ดูผู้ใช้ที่ฝากเงินเเบบติดเงื่อนไข"*** 
* **Deep Dive into Tasks to Track:** List of items to follow up on after seeing the overall deposit, withdrawal, and profit, such as pending withdrawals or failed withdrawals. 
    * *📌 There is a button **"ดูผู้ใช้ที่มียอดถอนค้าง"*** 
* **Summary of Prizes and Credits:** Shows credits from activities, prizes, and commissions that have been claimed.
    * *📌 There is a button **"ดูสมาชิกที่รับรางวัลวงล้อ"***
    * *📌 There is a button **"ดูสมาชิกที่รับรางวัลเช็คอิน"***
    * *📌 There is a button **"ดูสมาชิกที่ได้รับคืนยอดเสีย"***

---

### 📈 Deposit/Withdrawal Summary Section

A board that displays detailed statistical data and cash flow according to the selected date range for analysis.
* **💡 Number of Transactions:** Total number of deposit and withdrawal transactions in the system
* **💡 Turnover:** Total betting turnover of members
* **💡 Transfer In / Transfer Out:** Actual cash flow into and out of the system through the Payment Gateway
* **💡 We Eat Customers:** Net profit of the website, calculated from the logic `(Transfer In - Transfer Out)`
* **💡 Betting Amount / Payout Amount:** Total amount of bets placed by players and total winnings paid back to players
* **💡 Commission:** Total commission earned from members' gameplay in the system

---

### 🎮 Summary by Provider 

A table comparing statistics and profitability performance separated by game provider, allowing website owners to analyze which provider is the most popular or profitable for the website at a glance. The results are displayed in the following table format:

| Provider | Transactions | Turnover | Transfer In | Transfer Out | Eat Customers | Betting Amount | Payout Amount | Details |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| *Game Provider Name* | Total Amount | Total Amount | Total Amount | Total Amount | Transfer In - Transfer Out | Total Betting Amount | Total Winnings Paid Back | *View Details Button* |