import Head from 'next/head'
import NextLink from 'next/link'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'

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

  if (isLoading) return <CompsLoading />

  if (isError) return <div>{errorMessage}</div>
  console.log('orders', orders)

  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - Orders History</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-my-orders-history">
        <Typography variant="h4" sx={{ ml: 3, mt: 3, borderBottom: 2 }}>Orders History</Typography>

        <main>
          {
            orders.map((order, index) => (
              <div key={order.id}>
                <NextLink passHref href={`/my/orders/${order.id}`}>
                  <div>
                    <MenuItem divider>
                      <Typography variant="h6" sx={{ ml: 3, my: 1 }}>
                        {orders.length - index}{')'} Order ID#: {order.id}
                      </Typography>
                      <Typography sx={{ ml: 3 }}>
                        Date: {order.createdAt.slice(0, 10)}
                      </Typography>
                      <Typography sx={{ ml: 3 }}>
                        Status: {order.status}
                      </Typography>
                      <Divider />
                    </MenuItem>

                  </div>
                </NextLink>
              </div>
            ))
          }
        </main>
      </div>
    </CompsLayout>
  )
}

export default withPrivateRoute(PagesMyOrdersHistory)
