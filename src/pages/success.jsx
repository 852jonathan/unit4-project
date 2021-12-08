import Head from 'next/head'
import Typography from '@mui/material/Typography'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CompsLayout from '@/components/layouts/Layout'
import fetcher from '@/_services/fetcher'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['homepageorders', 'common', 'storelocator', 'menubag'])
  }
})
const Success = () => {
  const [loaded, setLoaded] = useState(false)
  const [seconds, setSeconds] = useState(5)

  const router = useRouter()
  const { query: { session_id: sessionId } } = router

  const { data } = useSWR(sessionId ? `/api/checkout_sessions/${sessionId}` : null, fetcher)

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    } else {
      setSeconds(0)
    }
  })

  useEffect(() => {
    if (data) {
      setLoaded(true)
      window.setTimeout(() => {
        localStorage.clear()
        router.push('/')
      }, 5000)
    }
  }, [data])

  if (!loaded) {
    return <div>Loading...</div>
  }

  return (

    <CompsLayout>
      <Head>
        <title>MAHABURGER - Thank you for ordering!</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-success">
        <Typography variant="h4" align="center" sx={{ my: 3 }}>Thank you for ordering!</Typography>
        <Typography variant="h5" align="center">Your order will be ready in 20-30 minutes.</Typography>
        <Typography variant="h5" align="center">Please come pick up your order at the shop.</Typography>
        <Typography variant="h6" align="center" sx={{ my: 3 }}>You will be redirected back to the Homepage
          { (seconds > 0) ? ` in ${seconds} seconds.` : ' now.'}
        </Typography>
        <Typography variant="h4" align="center" sx={{ my: 3 }}>感謝您訂單！</Typography>
        <Typography variant="h5" align="center">您的訂單將在 20-30 分鐘內準備好。</Typography>
        <Typography variant="h5" align="center">請到我們分店取餐。</Typography>

        <Typography variant="h6" align="center" sx={{ my: 3 }}>您
          { (seconds > 0) ? `將 ${seconds} 秒內返回主頁.` : '現在將返回主頁.'}
        </Typography>
      </div>
    </CompsLayout>
  )
}

export default Success
