import useSWR from 'swr'

import fetcher from '@/_services/fetcher'

export default function useProducts(category) {
  const { data, error } = useSWR(`/api/products?category=${category}`, fetcher)

  return {
    products: data?.products || [],
    isLoading: !error && !data,
    isError: error,
    errorMessage: error?.response?.data?.message
  }
}
