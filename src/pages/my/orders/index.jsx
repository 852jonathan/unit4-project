import Head from 'next/head'

import CompsLayout from '@/components/layouts/Layout'

export default function PagesMyOrdersHistory() {
  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - Orders History</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-my-orders-history">
        <h1>Orders History</h1>
      </div>
    </CompsLayout>
  )
}
