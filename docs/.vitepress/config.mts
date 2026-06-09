import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentations",
  description: "Documentation Hub for Mega and StockSync systems.",

  // Enforce dark mode by default
  appearance: 'dark',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'คู่มือการใช้งาน', link: '/' },
    ],

    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const cleanSrc = src.replace(/^#{2,6}\s+(.+)$/gm, '$1');
          return md.render(cleanSrc, env);
        },
        miniSearch: {
          options: {
            tokenize: (text) => {
              if (typeof text !== 'string') return [];
              const normalizedText = text.replaceAll('เเ', 'แ');
              const words = normalizedText.split(/[\s[\](){}:.,;?!'"“”‘’\\/`~@#$%^&*-+=<>]+/);
              const tokens: string[] = [];
              for (const word of words) {
                if (!word) continue;
                if (/[\u0E00-\u0E7F]/.test(word)) {
                  for (let i = 0; i < word.length - 1; i++) {
                    tokens.push(word.substring(i, i + 2));
                  }
                } else {
                  tokens.push(word.toLowerCase());
                }
              }
              return tokens;
            }
          },
          searchOptions: {
            fuzzy: false
          }
        },
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'ค้นหาคู่มือ...',
                buttonAriaLabel: 'ค้นหาคู่มือ'
              },
              modal: {
                noResultsText: 'ไม่พบข้อมูลที่ค้นหา',
                resetButtonTitle: 'ล้างคำค้นหา',
                footer: {
                  selectText: 'เลือก',
                  navigateText: 'เลื่อน',
                  closeText: 'ปิด'
                }
              }
            }
          }
        }
      }
    },

    // Default sidebar configurations for the system docs
    sidebar: [
      {
        text: 'เเนะนำการใช้งาน (Introduction)',
        items: [
          {
            text: 'ภาพรวมระบบ (Overview)', link: '/',
            collapsed: false, // ตั้งเป็น false เพื่อให้กางออกเห็นเมนูด้านใน
            items: [
              { text: 'เเดชบอร์ด (Dashboard)', link: '/dashboard' },
              { text: 'วิเคราะห์โปรโมชั่น (Promotion Analytics)', link: '/promotions-analytics' },
              { text: 'ค่าเฉลี่ยตามแหล่งที่มา (Traffic Source Analysis)', link: '/traffic-source' },
              { text: 'ผู้ใช้ออนไลน์ (Online Users)', link: '/online-users' }
            ]
          },
          {
            text: 'การตั้งค่าเริ่มต้น (Getting Started)',
            collapsed: false, // ตั้งเป็น false เพื่อให้กางออกเห็นเมนูด้านใน
            items: [
              { text: 'จัดการชื่อเว็บ (Website Info)', link: '/website-info' },
              { text: 'จัดการเนื้อหาหน้าเว็บ (Website Content)', link: '/website-content' },
              { text: 'ตั้งค่า SEO & Tracking (การตลาดและค้นหา)', link: '/seo-tracking' },
              { text: 'ตั้งค่าธุรกรรม (Transaction Settings)', link: '/transaction-setup' },



            ]
          },
          //{ text: 'สถาปัตยกรรมระบบ (Core Architecture)', link: '/architecture' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/phano/DocumentBet' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present DocBet Hub'
    }
  }
})
