import Head from 'next/head'
import NextLink from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useOrders from '@/_hooks/orders'
import withPrivateRoute from '@/_hocs/withPrivateRoute'
import CompsLoading from '@/components/Loading'

import CompsLayout from '@/components/layouts/Layout'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['homepageorders', 'common', 'storelocator', 'menubag'])
  }
})
function PagesMyOrdersHistory() {
  const { orders, isError, isLoading, errorMessage } = useOrders()

  if (isLoading) return <CompsLoading />

  if (isError) return <div>{errorMessage}</div>

  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - Orders History</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-my-orders-history">
        <h1>Orders History</h1>

        <main>
          {
            orders.map((order) => (
              <div key={order.id}>
                <NextLink passHref href={`/my/orders/${order.id}`}>
                  <div>
                    <p>
                      Order: {'#'}{order.id}
                    </p>
                    <span>
                      Date: {order.createdAt.slice(0, 10)}
                      <p>
                        Status: {order.status}
                      </p>
                    </span>
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
