import nc from 'next-connect'
import { Order } from '@/db/models'
import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import authenticateUser from '@/api/helpers/authenticateUser'

const OrdersIndex = async (req, res) => {
  const { query } = req
  const { currentUser } = res

  const sort = query.sort || 'createdAt'

  const order = []
  if (sort === 'status') {
    order.push(['status', 'DESC'])
  } else {
    order.push([sort, 'DESC'])
  }
  const orders = await Order.findAll({
    where: {
      UserId: currentUser.id
    },
    order,
    include: [
      {
        association: Order.User
      }, {
        association: Order.Products
      }
    ]
  })

  return res.status(200).json({ orders })
}

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .use(authenticateUser)
  .use(OrdersIndex)
