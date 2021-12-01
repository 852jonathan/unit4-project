import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { bag } = req.body
      // TODO create order and OrderProducts

      const session = await stripe.checkout.sessions.create({
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

      res.json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

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
