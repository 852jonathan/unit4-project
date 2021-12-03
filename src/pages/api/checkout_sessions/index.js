import nc from 'next-connect'

import checkoutSessionCreate from '@/api/controllers/checkout-session/create'

export default nc()
  .post(checkoutSessionCreate)
