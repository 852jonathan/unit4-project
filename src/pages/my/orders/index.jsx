import Head from 'next/head'
import NextLink from 'next/link'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { useTranslation } from 'next-i18next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useOrders from '@/_hooks/orders'
import withPrivateRoute from '@/_hocs/withPrivateRoute'
import CompsLoading from '@/components/Loading'

import CompsLayout from '@/components/layouts/Layout'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['homepageOrdersAbout', 'common', 'storelocator', 'menubag'])
  }
})

function PagesMyOrdersHistory() {
  const { orders, isError, isLoading, errorMessage } = useOrders()
  const { t } = useTranslation('homepageOrdersAbout')

  if (isLoading) return <CompsLoading />

  if (isError) return <div>{errorMessage}</div>
  console.log(orders)

  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - {t('ordersHistory')}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-my-orders-history">
        <Typography variant="h4" sx={{ ml: 3, mt: 3, borderBottom: 2 }}>{t('ordersHistory')}</Typography>

        <main>
          {
            orders.length > 0 ? (

              orders.map((order, index) => (
                <div key={order.id}>
                  <NextLink passHref href={`/my/orders/${order.id}`}>
                    <div>
                      <MenuItem divider>
                        <Typography variant="h6" sx={{ ml: 3, my: 1 }}>
                          {orders.length - index}{')'} {t('OrderID')} {'#'}{order.id}
                        </Typography>
                        <Typography sx={{ ml: 3 }}>
                          {t('date')} {order.createdAt.slice(0, 10)}
                        </Typography>
                        <Typography sx={{ ml: 3 }}>
                          {t('status')} {order.status}
                        </Typography>
                        <Divider />
                      </MenuItem>

                    </div>
                  </NextLink>
                </div>
              ))
            ) : (
              <>
                <Typography variant="h4" align="center" sx={{ my: 3 }}>{t('noOrdersYet')}</Typography>
                <NextLink passHref href="/menu">
                  <MenuItem sx={{ justifyContent: 'center' }}>
                    <Typography variant="h5" align="center" sx={{ my: 2 }}>{t('goToMenu')}</Typography>
                  </MenuItem>

                </NextLink>
              </>
            )
          }

        </main>
      </div>
    </CompsLayout>
  )
}

export default withPrivateRoute(PagesMyOrdersHistory)
