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
                  { text: 'หน้าเเรก', link: '/' },
                  { text: 'สรุปภาพรวม', link: '/menu/system-overview/dashboard' },
                  { text: 'ผู้ใช้ออนไลน์', link: '/menu/system-overview/online-users' },
                  { text: 'ตัวชี้วัดระบบ', link: '/menu/system-overview/system-metrics' }
                  // { text: 'วิเคราะห์โปรโมชั่น', link: '/menu/system-overview/promotions-analytics' },
                  // { text: 'ค่าเฉลี่ยตามแหล่งที่มา', link: '/menu/system-overview/traffic-source' },
                ]
              },
              {
                text: 'สมาชิก',
                items: [
                  { text: 'สมาชิก', link: '/menu/member-ranks/members' },
                  { text: 'พาร์ทเนอร์', link: '/menu/member-ranks/partners' },
                  { text: 'แท็กสมาชิก', link: '/menu/member-ranks/player-tags' }
                  // { text: 'ประวัติจ่ายพาร์ทเนอร์', link: '/menu/member-ranks/partner-payouts' },
                  // { text: 'แรงก์', link: '/menu/member-ranks/ranks' },
                  // { text: 'การตั้งค่า EXP', link: '/menu/member-ranks/exp-settings' },
                ]
              },
              {
                text: 'การเงิน',
                // collapsed: false,
                items: [
                  { text: 'รายการฝากเงิน', link: '/menu/finance/deposit-transactions' },
                  { text: 'รายการถอนเงิน', link: '/menu/finance/withdraw-transactions' },
                  { text: 'สรุปธุรกรรม', link: '/menu/finance/transaction-summary' },
                  { text: 'ตั้งค่าธุรกรรม', link: '/menu/finance/transaction-settings' },
                  // { text: 'ตั้งค่าการฝากเงิน', link: '/menu/finance/deposit-settings' },
                  // { text: 'ตั้งค่าการถอนเงิน', link: '/menu/finance/withdraw-settings' },
                  // { text: 'ตั้งค่าฝากไม่รับโปร', link: '/menu/finance/promotion-deposit-settings' },
                  // { text: 'ประวัติฝากไม่รับโปร', link: '/menu/finance/promotion-deposit-history' }
                ]
              },
              {
                text: 'ช่องทางการชำระเงิน',
                items: [
                  {
                    text: 'บัญชีธนาคาร',
                    link: '/menu/payment-channels/bank-accounts'
                  },
                  {
                    text: 'ธนาคารออโต้',
                    collapsed: true,
                    items: [
                      { text: 'ธนาคารออโต้', link: '/menu/payment-channels/auto-banks' },
                      { text: 'รายการฝากตรง', link: '/menu/payment-channels/deposit-direct' },
                      { text: 'รายการถอนตรง', link: '/menu/payment-channels/withdraw-direct' },
                    ]
                  }
                ]
              },
              {
                text: 'เกมเเละค่าย',
                // collapsed: false,
                items: [
                  { text: 'จัดการเกมเเละค่าย', link: '/menu/games/settings' },
                  // { text: 'รายการเกม', link: '/menu/games/game-list' },
                  // { text: 'ค่ายเกม', link: '/menu/games/game-providers' },
                  // { text: 'การเปิดเกม', link: '/menu/games/game-activation' },
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
                      { text: 'วิเคราะห์ช่ิงทางที่รู้จัก', link: '/menu/system-overview/traffic-source' },
                    ]
                  },
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
                    text: 'คืนยอดเสีย',
                    collapsed: true,
                    items: [
                      { text: 'คืนยอดเสีย', link: '/menu/rewards/cashback' },
                      { text: 'ประวัติคืนยอดเสีย', link: '/menu/rewards/cashback-history' },
                    ]
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
                  {
                    text: 'คอมมิชชัน',
                    collapsed: true,
                    items: [
                      { text: 'คอมมิชชัน', link: '/menu/rewards/commissions' },
                      { text: 'ประวัติคอมมิชชัน', link: '/menu/rewards/credit-withdrawals' },
                    ]
                  },
                  {
                    text: 'เช็คอินรายวัน',
                    collapsed: true,
                    items: [
                      { text: 'เช็คอินรายวัน', link: '/menu/rewards/daily-check-in' },
                      { text: 'ประวัติเช็คอินรายวัน', link: '/menu/rewards/daily-check-in-history' },
                    ]
                  },
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
                      { text: 'ตั้งค่าแชท', link: '/menu/line-chat/settings' },
                      { text: 'สถิติแชท', link: '/menu/line-chat/analytics' },
                      { text: 'แชทที่ถูกระงับ', link: '/menu/line-chat/banned' },
                      { text: 'แชทที่ถูกปิด', link: '/menu/line-chat/closed' },
                      { text: 'บรอดแคสต์ข้อความ', link: '/menu/line-chat/broadcast' },
                      { text: 'ประวัติส่งข้อความ LINE', link: '/menu/line-chat/logs' },
                      { text: 'จัดการ Flex Message', link: '/menu/line-chat/flex-messages' },
                    ]
                  },
                ]
              },
              {
                text: 'ส่งข้อความ',
                items: [
                  {
                    text: 'ส่งข้อความ',
                    link: '/menu/Messaging/broadcasts'
                  },
                  {
                    text: 'ข้อความอัตโนมัติ',
                    link: '/menu/Messaging/auto-messages'
                  },
                  {
                    text: 'ข้อความตามช่วงเวลา',
                    link: '/menu/Messaging/scheduled-messages'
                  },
                  {
                    text: 'วิเคราะห์ข้อความ',
                    collapsed: false,
                    items: [
                      { text: 'วิเคราะห์ข้อความ', link: '/menu/Messaging/messaging-analytics' },
                      { text: 'วิเคราะห์ Flex Message', link: '/menu/Messaging/flex-message-analytics' },
                    ]
                  },
                ]
              },
              {
                text: 'เว็บไซต์และแบรนด์',
                collapsed: false,
                items: [
                  { text: 'ข้อมูลเว็บไซต์', link: '/menu/website-brand/settings' },
                  { text: 'จัดหน้าแรก', link: '/menu/website-brand/page-builder' },
                  { text: 'เนื้อหาหน้าเว็บ', link: '/menu/website-brand/content' },
                  { text: 'ประกาศหลังเข้าสู่ระบบ', link: '/menu/website-brand/login-announcement' },
                  { text: 'แจ้งเตือนเงินหมด', link: '/menu/website-brand/broke-notification' },
                  { text: 'เมนูลัดหน้าเว็บ', link: '/menu/website-brand/menu-shortcuts' },
                  { text: 'ประกาศหลังบ้าน', link: '/menu/website-brand/announcements' },
                  { text: 'แบรนด์และธีม', link: '/menu/website-brand/theme' },
                  { text: 'ช่องทางติดต่อ', link: '/menu/website-brand/contact' },
                  { text: 'แอป Android', link: '/menu/website-brand/download' },
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
