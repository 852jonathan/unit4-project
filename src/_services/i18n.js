import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          homepage: {
            videoOverlay: 'Fresh burgers, made to order!',
            videoOverlayButton: 'Explore our Menu'
          },
          navbar: {
            navigation: 'Navigation',
            aboutUs: 'About Us',
            menu: 'Our Menu',
            storeLocator: 'Store Locator',
            registerLogin: 'Register/Login',
            bag: 'Bag'
          },
          storelocator: {
            storeLocator: 'STORE LOCATOR',
            mainshop: 'MAHABURGER - Main Shop',
            secondShop: 'MAHABURGER - Kennedy Town 2nd Shop',
            causewayBayShop: 'MAHABURGER - Causeway Bay Shop',
            address: 'Address:',
            telephone: 'Telephone',
            mainshopAddress: 'G/F, Cheung Hing Industrial Building, Kennedy Town',
            secondShopAddress: 'G/F, 31 Rock Hill St, Kennedy Town',
            causewayBayAddress: 'G/F, 36 Jardine\'s Bazaar, Causeway Bay'
          }
        }
      },
      cn: {
        translation: {
          homepage: {
            videoOverlay: '熱辣辣漢堡包，即叫即做！',
            videoOverlayButton: '即刻睇菜單!'
          },
          navbar: {
            navigation: '導航',
            aboutUs: '關於我們',
            menu: '菜單',
            storeLocator: '查看分店',
            registerLogin: '註冊/登錄',
            bag: '購物籃'
          },
          storelocator: {
            storeLocator: '查看分店',
            mainshop: 'MAHABURGER - 總店',
            secondShop: 'MAHABURGER - 堅尼地城第二店',
            causewayBayShop: 'MAHABURGER - 銅鑼灣店',
            address: '地址: ',
            telephone: '電話: ',
            mainshopAddress: '堅尼地城長興工業大廈地下',
            secondShopAddress: '堅尼地城石山街31號地下',
            causewayBayAddress: '銅鑼灣渣甸街36號地下'
          }
        }
      }
    }
  })

export default i18n
