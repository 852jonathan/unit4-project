import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const { id } = req.query

  try {
    if (!id.startsWith('cs_')) {
      throw Error('Incorrect CheckoutSession ID.')
    }
    const checkoutSession = await stripe.checkout.sessions.retrieve(id)

    res.status(200).json(checkoutSession)
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message)
  }
}
