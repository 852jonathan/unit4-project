import nc from 'next-connect'

import ProductIndex from '@/api/controllers/products/index'

export default nc()
  .get(ProductIndex)
