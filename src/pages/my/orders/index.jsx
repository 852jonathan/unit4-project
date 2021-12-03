import Head from 'next/head'
import NextLink from 'next/link'

import CompsLayout from '@/components/layouts/Layout'
import withPrivateRoute from '@/_hocs/withPrivateRoute'

function PagesMyOrdersHistory() {
  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - Orders History</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-my-orders-history">
        <h1>Orders History</h1>

        {/* <main>
          {
            orders.map((order) => (
              <div key={order.id}>
                <NextLink href={`/my/orders/${order.id}`}>
                  Date: {order.createdAt.slice(0, 10)}
                  Status: {order.status}
                </NextLink>
              </div>
            ))
          }
        </main> */}
      </div>
    </CompsLayout>
  )
}

export default withPrivateRoute(PagesMyOrdersHistory)
