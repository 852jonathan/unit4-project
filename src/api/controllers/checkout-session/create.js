import nc from 'next-connect'
import Stripe from 'stripe'

import { Order } from '@/db/models'
import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import authenticateUser from '@/api/helpers/authenticateUser'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const checkoutSessionCreate = async (req, res) => {
  try {
    const { currentUser } = res
    const { bag } = req.body

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

    await Order.create({
      UserId: currentUser.id,
      grandTotal: stripeSession.amount_total / 100, // TODO might need to change to float
      StripeID: stripeSession.id,
      status: 'Pending Payment'
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

// ProductId: 2
// feature: false
// product:
//   Category: {id: 1, catName: 'burgers', createdAt: '2021-12-01T06:13:16.169Z', updatedAt: '2021-12-01T06:13:16.169Z'}
//   CategoryId: 1
//   createdAt: "2021-12-01T06:13:16.185Z"
//   description: "Double beef cheeseburger with cheese, lettuce & tomatoes"
//   feature: null
//   id: 2
//   image: "http://loremflickr.com/536/519/hamburger"
//   ingredients: null
//   price: 70
//   productName: "Double Cheeseburger"
//   updatedAt: "2021-12-01T06:13:16.185Z"
// quantity: 1
// subTotal: 70

// Create Checkout Sessions from body params.
// [
//   {
//     price_data: {
//       currency,
//       unit_amount,
//       product_data: {
//         name
//       }
//     },
//     quantity
//   }
// ]
