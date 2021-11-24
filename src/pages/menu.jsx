import Head from 'next/head'

import CompsLayout from '@/components/layouts/Layout'

export default function PagesMenu() {
  return (
    <CompsLayout>
      <Head>
        <title>MahaBurger - Menu</title>
      </Head>
      <div id="pages-menu">
        <h1>Menu</h1>
      </div>
    </CompsLayout>
  )
}
