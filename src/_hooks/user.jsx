import useSWR from 'swr'

import axios from 'axios'
import fetcher from '@/_services/fetcher'

export default function useUser() {
  const { data, error } = useSWR('/api/my/profile', fetcher)

  const emailSignup = (values) => new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/api/auth/email/signup',
      data: values,
      withCredentials: true
    }).then(() => {
      resolve()
    }).catch((err) => {
      reject(err)
    })
  })

  const emailLogin = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/api/auth/email/login',
      data: values,
      withCredentials: true
    }).then(() => {
      resolve()
    }).catch((err) => {
      reject(err)
    })
  }))

  const authLogout = () => new Promise((resolve, reject) => {
    axios({
      method: 'DELETE',
      url: '/api/auth/logout',
      withCredentials: true
    }).then(() => {
      resolve()
    }).catch((err) => {
      reject(err)
    })
  })

  return {
    user: data?.user || null,
    isLoading: !error && !data,
    isError: error,
    errorMessage: error?.response?.data?.message,
    emailLogin,
    emailSignup,
    authLogout
  }
}
