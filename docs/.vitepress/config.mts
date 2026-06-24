import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// ตัวอย่างการจัดโครงสร้าง config ให้ทำงานร่วมกันได้ดีขึ้น

export default defineConfig({
  base: '/DocumentationsBet/',
  title: "Documentations",
  description: "Documentation Hub for Mega and StockSync systems.",

  // Enforce dark mode by default
  appearance: 'dark',

  locales: {
    root: {
      label: 'ไทย',
      lang: 'th',
      themeConfig: {
        outline: [2, 3],

        nav: [
          { text: 'คู่มือการใช้งาน', link: '/' },
        ],
        sidebar: [
          {
            text: 'คู่มือการใช้งาน',
            items: [
              {
                text: 'หลัก',
                items: [
                  { text: 'หน้าเเรก', link: '/menu/system-overview/home-page' },
                  { text: 'สรุปภาพรวม', link: '/menu/system-overview/dashboard' },
                  { text: 'ผู้ใช้ออนไลน์', link: '/menu/system-overview/online-users' },
                  { text: 'ตัวชี้วัดระบบ', link: '/menu/system-overview/system-metrics' }
                ]
              },
              {
                text: 'สมาชิก',
                items: [
                  { text: 'สมาชิก', link: '/menu/member-ranks/members' },
                  { text: 'พาร์ทเนอร์', link: '/menu/member-ranks/partners' },
                  { text: 'แท็กสมาชิก', link: '/menu/member-ranks/player-tags' }
                ]
              },
              {
                text: 'การเงิน',
                // collapsed: false,
                items: [
                  { text: 'รายการฝากเงิน', link: '/menu/finance/deposit-transactions' },
                  { text: 'รายการถอนเงิน', link: '/menu/finance/withdraw-transactions' },
                  {
                    text: 'จัดการธนาคาร',
                    collapsed: true,
                    items: [
                      { text: 'จัดการธนาคาร', link: '/menu/payment-channels/payment-settings' },
                      { text: 'รายการฝากตรง', link: '/menu/payment-channels/deposit-direct' },
                      { text: 'รายการถอนตรง', link: '/menu/payment-channels/withdraw-direct' },
                      { text: 'สรุปภาพรวมธนาคาร', link: '/menu/payment-channels/payment-summary' },
                      { text: 'ตั้งค่าเวลาฝาก', link: '/menu/payment-channels/deposit-hours' },
                      { text: 'ตั้งค่าเวลาถอน', link: '/menu/payment-channels/withdraw-hours' },

                    ]
                  },
                  { text: 'ตั้งค่าธุรกรรม', link: '/menu/finance/transaction-settings' }
                ]
              },
              {
                text: 'เกมเเละค่าย',
                // collapsed: false,
                items: [
                  { text: 'จัดการเกมเเละค่าย', link: '/menu/games/game-settings' },
                  { text: 'โหมดปรับแตก / RTP', link: '/menu/games/setting-rtp' },
                ]
              },
              {
                text: 'การตลาด',
                // collapsed: false,
                items: [
                  {
                    text: 'โปรโมชั่น',
                    collapsed: true,
                    items: [
                      { text: 'โปรโมชั่น', link: '/menu/marketing/promotions' },
                      { text: 'วิเคราะห์โปรโมชั่น', link: '/menu/system-overview/promotions-analytics' },
                    ]
                  },
                  {
                    text: 'ช่องทางที่รู้จัก',
                    collapsed: true,
                    items: [
                      { text: 'ช่องทางที่รู้จัก', link: '/menu/marketing/referral-sources' },
                      { text: 'วิเคราะห์ช่องทางที่รู้จัก', link: '/menu/system-overview/traffic-source' },
                    ]
                  },
                  {
                    text: 'ส่งข้อความ',
                    collapsed: true,
                    items: [
                      { text: 'ส่งข้อความ', link: '/menu/messaging/broadcasts' },
                      { text: 'วิเคราะห์ข้อความ', link: '/menu/messaging/messaging-analytics' },
                    ]
                  }
                ]
              },
              {
                text: 'รางวัลและกิจกรรม',
                items: [
                  {
                    text: 'เเรงก์',
                    link: '/menu/member-ranks/ranks'
                  },
                  {
                    text: 'กงล้อ',
                    collapsed: true,
                    items: [
                      { text: 'กงล้อ', link: '/menu/rewards/wheels' },
                      { text: 'ประวัติกงล้อ', link: '/menu/rewards/wheel-history' },
                    ]
                  },
                  {
                    text: 'ชวนเพื่อน',
                    collapsed: true,
                    items: [
                      { text: 'ตั้งค่าการชวนเพื่อน', link: '/menu/rewards/referral-settings' },
                      { text: 'ประวัติคอมมิชชันชวนเพื่อน', link: '/menu/rewards/commission-history' },
                    ]
                  },
                  { text: 'คูปอง', link: '/menu/rewards/coupons' },
                  { text: 'กิจกรรม', link: '/menu/rewards/activities' },
                ]
              },
              {
                text: 'แชท LINE',
                items: [
                  {
                    text: 'แชท',
                    link: '/menu/line-chat/line-messaging'
                  },
                  {
                    text: 'จัดการแชท LINE',
                    collapsed: false,
                    items: [
                      { text: 'ตั้งค่าแชท', link: '/menu/line-chat/chat-settings' },
                      { text: 'สถิติแชท', link: '/menu/line-chat/chat-analytics' },
                      { text: 'แชทที่ถูกระงับ / ปิด', link: '/menu/line-chat/closed' },
                      { text: 'บรอดแคสต์ข้อความ', link: '/menu/line-chat/broadcast' },
                      { text: 'ประวัติส่งข้อความ LINE', link: '/menu/line-chat/chat-logs' },
                      { text: 'จัดการ Flex Message', link: '/menu/line-chat/flex-messages' },
                    ]
                  },
                ]
              },
              {
                text: 'เว็บไซต์และแบรนด์',
                collapsed: false,
                items: [
                  { text: 'ข้อมูลเว็บไซต์', link: '/menu/website-brand/website-settings' },
                  { text: 'จัดหน้าแรก', link: '/menu/website-brand/page-builder' },
                  { text: 'เเจ้งเตือนเงินหมด', link: '/menu/website-brand/broke-notification' },
                ]
              },
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
        outline: [2, 3],

        nav: [
          { text: 'User Guide', link: '/en/' },
        ],
      }
    }
  },

  themeConfig: {

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
              const words = normalizedText.split(/[\s\[\](){}:.,;?!'"“”‘’\\\/`~@#$%^&\-+=<>]+/);
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
