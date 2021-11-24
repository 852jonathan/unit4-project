import Head from 'next/head'

import CompsLayout from '@/components/layouts/Layout'
import CompsVideoPlayer from '@/components/video/videoplayer'

export default function PagesHome() {
  return (
    <CompsLayout>
      <Head>
        <title>MahaBurger - Home Page - The Best Burgers in Town!</title>
      </Head>
      <div id="pages-home">
      {/* <CompsVideoPlayer/> */}
        <h1>Homepage</h1>
      </div>
    </CompsLayout>
  )
}
