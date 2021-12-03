const { body } = require('express-validator')
const multer = require('multer')
const { Order } = require('@/db/models')

const { authenticateCurrentUserByToken } = require('@/api/helpers/authenticateUser')

const permittedParams = [
  'grandTotal',
  'UserId'
]

const apiCreateNewOrderProduct = async function (req, res) {
  const { currentUser } = res
  const { body: userParams } = req

  // const cart = await currentUser.getCart()
  // alternative writing of above line
  const cart = await Cart.findAll({ where: { UserId: currentUser.id } })

  // duplicating cart data into a new OrderProduct
  const orderProductData = cart.map(({ ProductId, quantity }) => ({ ProductId, quantity }))

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
