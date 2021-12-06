import nc from 'next-connect'

import myOrdersIndex from '@/api/controllers/my/orders'

export default nc()
  .get(myOrdersIndex)
