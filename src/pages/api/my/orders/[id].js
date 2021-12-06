import nc from 'next-connect'

import myOrdersShow from '@/api/controllers/my/orders/show'

export default nc()
  .get(myOrdersShow)
