import nc from 'next-connect'
import Stripe from 'stripe'

import { Order } from '@/db/models'
import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import authenticateUser from '@/api/helpers/authenticateUser'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const checkoutSessionShow = async (req, res) => {
  const { id } = req.query
  const { currentUser } = res

  try {
    if (!id.startsWith('cs_')) throw Error('Incorrect CheckoutSession ID.')

    const order = await Order.findOne({ where: { StripeID: id, UserId: currentUser.id } })
    if (!order) throw Error('This is an invalid action')

    const checkoutSession = await stripe.checkout.sessions.retrieve(id)
    if (!checkoutSession) throw Error('This is an invalid Action')

    if (order.status !== 'Paid' && checkoutSession.payment_status === 'paid') {
      await order.update({ status: 'Paid' })
    }

    console.log('checkoutSession>>>>>>>>>', checkoutSession)

    res.status(200).json(checkoutSession)
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message)
  }
}

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .use(authenticateUser)
  .use(checkoutSessionShow)
