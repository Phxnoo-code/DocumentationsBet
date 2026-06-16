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
                text: 'ภาพรวมระบบ',
                collapsed: false,
                items: [
                  { text: 'แดชบอร์ด', link: '/menu/system-overview/dashboard' },
                  { text: 'วิเคราะห์โปรโมชั่น', link: '/menu/system-overview/promotions-analytics' },
                  { text: 'ค่าเฉลี่ยตามแหล่งที่มา', link: '/menu/system-overview/traffic-source' },
                  { text: 'ผู้ใช้ออนไลน์', link: '/menu/system-overview/online-users' }
                ]
              },
              {
                text: 'สมาชิกและแรงก์',
                collapsed: false,
                items: [
                  { text: 'สมาชิก', link: '/menu/member-ranks/members' },
                  { text: 'พาร์ทเนอร์', link: '/menu/member-ranks/partners' },
                  { text: 'ประวัติจ่ายพาร์ทเนอร์', link: '/menu/member-ranks/partner-payouts' },
                  { text: 'แรงก์', link: '/menu/member-ranks/ranks' },
                  { text: 'การตั้งค่า EXP', link: '/menu/member-ranks/exp-settings' },
                  { text: 'แท็กผู้เล่น', link: '/menu/member-ranks/player-tags' }
                ]
              },
              {
                text: 'การเงิน',
                collapsed: false,
                items: [
                  { text: 'รายการฝากเงิน', link: '/menu/finance/deposit-transactions' },
                  { text: 'รายการถอนเงิน', link: '/menu/finance/withdraw-transactions' },
                  { text: 'สรุปธุรกรรม', link: '/menu/finance/transaction-summary' },
                  { text: 'ตั้งค่าธุรกรรม', link: '/menu/finance/transaction-settings' },
                  { text: 'ตั้งค่าการฝากเงิน', link: '/menu/finance/deposit-settings' },
                  { text: 'ตั้งค่าการถอนเงิน', link: '/menu/finance/withdraw-settings' },
                  { text: 'ตั้งค่าฝากไม่รับโปร', link: '/menu/finance/promotion-deposit-settings' },
                  { text: 'ประวัติฝากไม่รับโปร', link: '/menu/finance/promotion-deposit-history' }
                ]
              },
              {
                text: 'ช่องทางการชำระเงิน',
                collapsed: false,
                items: [
                  { text: 'บัญชีธนาคาร', link: '/menu/payment-channels/bank-accounts' },
                  { text: 'ธนาคารออโต้', link: '/menu/payment-channels/auto-banks' },
                  { text: 'รายการฝากตรง', link: '/menu/payment-channels/deposit-direct' },
                  { text: 'รายการถอนตรง', link: '/menu/payment-channels/withdraw-direct' },
                ]
              },
              {
                text: 'เกมเเละค่าย',
                collapsed: false,
                items: [
                  { text: 'รายการเกม', link: '/menu/games/game-list' },
                  { text: 'ค่ายเกม', link: '/menu/games/game-providers' },
                  { text: 'การเปิดเกม', link: '/menu/games/game-activation' },
                ]
              },
              {
                text: 'การตลาด',
                collapsed: false,
                items: [
                  { text: 'โปรโมชั่น', link: '/menu/marketing/promotions' },
                  { text: 'การตลาด', link: '/menu/marketing/referral-sources' },
                ]
              },
              {
                text: 'ชวนเพื่อนและคอมมิชชัน',
                collapsed: false,
                items: [
                  { text: 'ตั้งค่าการชวนเพื่อน', link: '/menu/referral/referral-settings' },
                  { text: 'ประวัติคอมมิชชันชวนเพื่อน', link: '/menu/referral/commission-history' },
                  { text: 'รายการคอมมิชชัน', link: '/menu/referral/commissions' },
                  { text: 'ประวัติคอมมิชชัน', link: '/menu/referral/credit-withdrawals' },
                ]
              },
              {
                text: 'รางวัลและกิจกรรม',
                collapsed: false,
                items: [
                  { text: 'คูปอง', link: '/menu/rewards/coupons' },
                  { text: 'กิจกรรม', link: '/menu/rewards/activities' },
                  { text: 'คืนยอดเสีย', link: '/menu/rewards/cashback' },
                  { text: 'ประวัติคืนยอดเสีย', link: '/menu/rewards/cashback-history' },
                  { text: 'เช็คอินรายวัน', link: '/menu/rewards/daily-check-in' },
                  { text: 'ประวัติเช็คอินรายวัน', link: '/menu/rewards/daily-check-in-history' },
                  { text: 'รายการกงล้อ', link: '/menu/rewards/wheels' },
                  { text: 'ประวัติกงล้อ', link: '/menu/rewards/wheel-history' }
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
