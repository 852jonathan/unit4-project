import useSWR from 'swr'
import axios from 'axios'
import produce from 'immer'

import fetcher from '@/_services/fetcher'

export default function useOrders() {
  const { data, error, mutate } = useSWR('/api/my/orders', fetcher)
  // const { data, error, mutate } = useSWR(id ? `/api/my/orders/${id}` : null, fetcher)

  const createOrder = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: 'api/controllers/my/orders',
      data: values,
      withCredentials: true
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
    orders: data?.orders,
    isLoading: !error && !data,
    isError: error,
    errorMessage: error?.response?.data?.message,
    createOrder
  }
}
