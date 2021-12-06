import useSWR from 'swr'

import fetcher from '@/_services/fetcher'

export default function useOrder(id) {
  const { data, error } = useSWR(`/api/my/orders/${id}`, fetcher)

  return {
    order: data?.order,
    isLoading: !error && !data,
    isError: error,
    errorMessage: error?.response?.data?.message
  }
}
