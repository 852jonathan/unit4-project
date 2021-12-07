import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import CompsLayout from '@/components/layouts/Layout'
// import CompsImageList from '@/components/imagelist/ImageList'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['homepage', 'common', 'storelocator', 'menubag'])
  }
})
export default function PagesAboutUs() {
  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - About Us</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

      </Head>
      <div id="pages-aboutus">
        <h1>About Us</h1>
        {/* <CompsImageList /> */}

      </div>
    </CompsLayout>
  )
}
