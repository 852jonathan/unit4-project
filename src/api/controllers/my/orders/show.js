import nc from 'next-connect'
import { Order, OrderProduct } from '@/db/models'
import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import authenticateUser from '@/api/helpers/authenticateUser'

const myOrdersShow = async (req, res) => {
  const { query: { id } } = req

  const orderShow = await Order.findOne({
    where: {
      id: Number(id) || 0
    },
    include: [
      {
        association: Order.OrderProducts,
        include: {
          association: OrderProduct.Product
        }
      }
    ]
  })

  if (!orderShow) {
    return res.status(404).json({ message: 'Order not found!' })
  }

  return res.status(200).json({ order: orderShow })
}

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .use(authenticateUser)
  .use(myOrdersShow)
