# 🔍 SEO & Tracking

A page for configuring the website to rank well on Google, display attractive preview images when shared, and link analytical tools to gather member behavior data.

## 📍 How to access this menu
* **Go to:** Left Menu > **"Website and Brand"** > **"Website Content"** > Select the **"SEO & Tracking"** tab.

---

## ⚙️ Configuration Settings

### 1. SEO Meta Tags (Search and Sharing Info)
Fields for entering metadata that Google crawls to display and rank the site.
* **Website Title (TITLE):** Enter the site name along with strong keywords (e.g., `A-TEE8 Online Gambling Site...`).
  * *Where it displays:* Shows on the top browser tab title and as the clickable blue headline in Google search results.
* **Description (DESCRIPTION):** A brief summary of the site's highlights and details.
  * *Where it displays:* Shows as the gray description text below the title in search engine results.
* **KEYWORDS:** Key search terms related to your site (e.g., `slots, baccarat`). Separate each term with a comma `,`.
* **OG IMAGE URL:** Path to the preview image.
  * *Where it displays:* This image pops up as a preview when the link is shared in chat apps like LINE or posted on Facebook.

> ⚠️ **Length and Size Warnings:**
> * **Do not write long text:** Page titles should be under 60 characters and descriptions within 120-160 characters. Exceeding these limits causes search engines to truncate your text.
> * **Preview Image Size:** We recommend **1200×630 px** for OG Images so they display sharp and clear on social media without cropping.

---

### 2. Site Verification (Verify Domain Ownership)
Paste verification tokens from search engines and advertisement networks to verify website ownership.
* **GOOGLE SEARCH CONSOLE:** Enter the verification code from Google Search Console to associate the site.
* **FACEBOOK BUSINESS MANAGER:** Enter the verification domain key from Facebook Brand Safety (Domains) to verify the domain for running ads.

> ⚠️ **Warning on Copying Keys:**
> * **Do not paste the entire HTML tag:** Copy **only the alphanumeric token string** inside the `content="..."` attribute. Do not paste the full `<meta ... />` HTML tag, otherwise the system will fail to verify.

---

### 3. Google Tag Manager (Visitor Analytics)
Integrate GTM to automatically track visitor traffic and button clicks.
* **GTM CONTAINER ID:** Paste your GTM Container ID (formatted as `GTM-XXXXXXXX`, e.g., `GTM-ABC1234`).
  * *How it works:* Once saved, the back-office injects the GTM script tags into every page of the website automatically. This allows you to track button clicks, signups, and deposits to measure marketing campaigns.

> ⚠️ **Removing a GTM Code:**
> * To disable or replace the GTM container, simply **clear the input field and click save**. The old GTM scripts will be safely removed from the website immediately.
