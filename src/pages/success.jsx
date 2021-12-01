import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
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
    <div>Thank you for ordering! You Will be redirected in 3 seconds</div>

  )
}

export default Success
