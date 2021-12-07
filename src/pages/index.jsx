import Head from 'next/head'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import CompsLayout from '@/components/layouts/Layout'
import CompsVideoPlayer from '@/components/video/videoplayer'
import CompsVideoOverlay from '@/components/video/overlay'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['homepage', 'common', 'storelocator', 'menubag'])
  }
})

export default function PagesHome() {
  const { t } = useTranslation('common')

  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - {t('homepage')}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-home">
        <div id="video-backcover">
          <CompsVideoOverlay />
          <CompsVideoPlayer />
        </div>
      </div>
    </CompsLayout>
  )
}
