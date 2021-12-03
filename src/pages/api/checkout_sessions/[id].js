import nc from 'next-connect'

import checkoutSessionShow from '@/api/controllers/checkout-session/show'

export default nc()
  .get(checkoutSessionShow)
