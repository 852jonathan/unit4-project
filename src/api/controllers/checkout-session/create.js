import nc from 'next-connect'
import Stripe from 'stripe'

import { Order, Product } from '@/db/models'
import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import authenticateUser from '@/api/helpers/authenticateUser'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const permittedParams = [
  'UserId',
  'grandTotal',
  'StripeID',
  'status'
]

const checkoutSessionCreate = async (req, res) => {
  console.log('req1================', req)

  try {
    const { currentUser } = res
    const { bag } = req.body
    console.log('req2================', req)

    const stripeSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: bag.map((item) => ({
        price_data: {
          currency: 'HKD',
          unit_amount: item.product.price * 100,
          product_data: {
            name: item.product.productName
          // description: item.product.ingredients || ''
          }
        },
        quantity: item.quantity
      })),
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/menu`
    })

    const orderProductData = []
    for (let i = 0; i < bag.length; i += 1) {
      const item = bag[i]

      let { ProductId } = item

      if (!ProductId) {
        const product = await Product.create({
          ...item.product,
          description: item.product.productName,
          ingredients: JSON.stringify(item.product.ingredients),
          CategoryId: 1,
          image: '/assets/burgercreate.png',
          feature: false
        })

        ProductId = product.id
      }

      orderProductData.push({
        OrderId: Order.id,
        ProductId,
        quantity: item.quantity,
        subTotal: item.subTotal
      })
    }

    await Order.create({
      UserId: currentUser.id,
      grandTotal: stripeSession.amount_total / 100,
      StripeID: stripeSession.id,
      status: 'Pending Payment',
      OrderProducts: orderProductData
    }, {
      fields: permittedParams,
      include: {
        association: Order.OrderProducts
      }
    })

    res.json(stripeSession)
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message)
  }
}

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .use(authenticateUser)
  .use(checkoutSessionCreate)
