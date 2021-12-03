import Head from 'next/head'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import CompsLayout from '@/components/layouts/Layout'
import fetcher from '@/_services/fetcher'

const Success = () => {
  const [loaded, setLoaded] = useState(false)

  const router = useRouter()
  const { query: { session_id: sessionId } } = router

  const { data } = useSWR(sessionId ? `/api/checkout_sessions/${sessionId}` : null, fetcher)

  useEffect(() => {
    if (data) {
      setLoaded(true)
      window.setTimeout(() => {
        localStorage.clear()
        router.push('/')
      }, 3000)
    }
  }, [data])

  if (!loaded) {
    return <div>Loading...</div>
  }

  return (

    <CompsLayout>
      <Head>
        <title>MAHABURGER - Home Page - The Best Burgers in Town!</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-success">
        <div>Thank you for ordering! You will be redirected in 3 seconds</div>
      </div>
    </CompsLayout>
  )
}

export default Success
