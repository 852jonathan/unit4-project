const { body } = require('express-validator')
const multer = require('multer')
const { Order } = require('@/db/models')

const { authenticateCurrentUserByToken } = require('@/api/helpers/authenticateUser')

const permittedParams = [
  'OrderId',
  'ProductId',
  'quantity',
  'subTotal'
]

const apiCreateNewOrderProduct = async function (req, res) {
  const { currentUser } = res
  const { body: userParams } = req

  const order = await Order.findAll({ where: { UserId: currentUser.id } })

  // duplicating order data into a new OrderProduct
  const orderProductData = order.map(({ ProductId, quantity }) => ({ ProductId, quantity }))

  const order = await Order.create({
    ...userParams,
    UserId: currentUser.id,
    OrderProducts: orderProductData
  }, {
    fields: permittedParams,
    include: {
      association: Order.OrderProducts
    }
  })

  res.json({ order })
}

module.exports = [
  multer().none(),
  authenticateCurrentUserByToken,
  // validation,
  // checkValidation,
  apiCreateNewOrderProduct
]
