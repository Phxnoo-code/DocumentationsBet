import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentations",
  description: "Documentation Hub for Mega and StockSync systems.",

  // Enforce dark mode by default
  appearance: 'dark',

  locales: {
    root: {
      label: 'ไทย',
      lang: 'th',
      themeConfig: {
        nav: [
          { text: 'คู่มือการใช้งาน', link: '/' },
        ],
        sidebar: [
          {
            text: 'แนะนำการใช้งาน',
            items: [
              {
                text: 'ภาพรวมระบบ',
                collapsed: false,
                items: [
                  { text: 'แดชบอร์ด', link: '/dashboard' },
                  { text: 'วิเคราะห์โปรโมชั่น', link: '/promotions-analytics' },
                  { text: 'ค่าเฉลี่ยตามแหล่งที่มา', link: '/traffic-source' },
                  { text: 'ผู้ใช้ออนไลน์', link: '/online-users' }
                ]
              },
              {
                text: 'การตั้งค่าเริ่มต้น',
                collapsed: false,
                items: [
                  { text: 'จัดการชื่อเว็บ', link: '/website-info' },
                  { text: 'จัดการเนื้อหาหน้าเว็บ', link: '/website-content' },
                  { text: 'ตั้งค่า SEO & Tracking ', link: '/seo-tracking' },
                  { text: 'ตั้งค่าธุรกรรม ', link: '/transaction-setup' }
                ]
              }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'User Guide', link: '/en/' },
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              {
                text: 'System Overview',
                collapsed: false,
                items: [
                  { text: 'Dashboard', link: '/en/dashboard' },
                  { text: 'Promotion Analysis', link: '/en/promotions-analytics' },
                  { text: 'Marketing Source Analysis', link: '/en/traffic-source' },
                  { text: 'Online Users', link: '/en/online-users' }
                ]
              },
              {
                text: 'Initial Settings',
                collapsed: false,
                items: [
                  { text: 'Website Info', link: '/en/website-info' },
                  { text: 'Website Content', link: '/en/website-content' },
                  { text: 'SEO & Tracking', link: '/en/seo-tracking' },
                  { text: 'Transaction Setup', link: '/en/transaction-setup' }
                ]
              }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search documentation...',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/phano/DocumentBet' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present DocBet Hub'
    }
  }
})
