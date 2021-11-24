import Head from 'next/head'

import CompsLayout from '@/components/layouts/Layout'

export default function PagesAboutUs() {
  return (
    <CompsLayout>
      <Head>
        <title>MahaBurger - About Us</title>
      </Head>
      <div id="pages-aboutus">
        <h1>About Us</h1>
      </div>
    </CompsLayout>
  )
}
