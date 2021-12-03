import { useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { useRouter } from 'next/router'
import produce from 'immer'

import fetcher from '@/_services/fetcher'

export default function useOrder() {
  const router = useRouter()
  const url = `http://localhost:3000/api/orders`
  const { data, error, mutate } = useSWR(url, fetcher)
  const [order, setOrder] = useState([])

const createOrder = (values) => (new Promise((resolve, reject) => {
  axios({
    method: 'POST',
    url: `http://localhost:3000/api/controllers/my/orders`,
    data: values
  }).then((resp) => {
    resolve()
    mutate(produce(data, (draft) => {
      draft.order.Order.push(resp.data.order)
    }))
  }).catch(() => {
    reject()
  })
}))

return {
  order: data?.order,
  isLoading: !error && !data,
  isError: error,
  errorMessage: error?.response?.data?.message,
  createOrder,
}
