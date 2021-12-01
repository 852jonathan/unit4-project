import Head from 'next/head'

import CompsLayout from '@/components/layouts/Layout'
import CompsVideoPlayer from '@/components/video/videoplayer'
import CompsVideoOverlay from '@/components/video/overlay'

export default function PagesHome() {
  return (
    <CompsLayout>
      <Head>
        <title>MahaBurger - Home Page - The Best Burgers in Town!</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div id="pages-home">
        <div id="video-backcover">
          <CompsVideoOverlay />
          <CompsVideoPlayer />
        </div>
        <h1>Homepage</h1>
      </div>
    </CompsLayout>
  )
}
