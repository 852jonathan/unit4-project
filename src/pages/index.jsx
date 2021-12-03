import Head from 'next/head'

import CompsLayout from '@/components/layouts/Layout'
import CompsVideoPlayer from '@/components/video/videoplayer'
import CompsVideoOverlay from '@/components/video/overlay'

export default function PagesHome() {
  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - Home Page - The Best Burgers in Town!</title>
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
