import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import useUser from '@/_hooks/user'

import CompsLoading from '@/components/Loading'

export default function withPrivateRoute(WrappedComponent) {
  return function PrivateRoute(props) {
    const router = useRouter()
    const { user, isLoading } = useUser()

    useEffect(() => {
      if (!isLoading && !user) {
        router.push('/')
        toast.error('Please login first!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        })
      }
    }, [isLoading])

    if (isLoading || !user) return <CompsLoading />

    return <WrappedComponent {...props} />
  }
}
