import Head from 'next/head'

import CompsLayout from '@/components/layouts/Layout'

export default function PagesStoreLocator() {
  return (
    <CompsLayout>
      <Head>
        <title>MahaBurger - Store Locator</title>
      </Head>
      <div id="pages-storelocator">
        <h1>Store Locator</h1>
      </div>
    </CompsLayout>
  )
}
