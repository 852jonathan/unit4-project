import Head from 'next/head'
import Typography from '@mui/material/Typography'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import CompsLayout from '@/components/layouts/Layout'
import fetcher from '@/_services/fetcher'

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
        <Typography variant="h5" align="center">Please come to the shop to pickup.</Typography>
        <Typography variant="h6" align="center" sx={{ my: 3 }}>You will be redirected back to the Homepage
          { (seconds > 0) ? ` in ${seconds} seconds.` : ' now.'}
        </Typography>
      </div>
    </CompsLayout>
  )
}

export default Success
