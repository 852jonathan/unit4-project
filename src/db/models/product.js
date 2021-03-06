const { Model } = require('sequelize')
const ProductSchema = require('../schema/product')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.Category = this.belongsTo(models.Category)
      Product.OrderProducts = this.hasMany(models.OrderProduct)
      Product.Orders = this.belongsToMany(models.Order, { through: 'OrderProduct' })
      // ? Product.Users = this.belongsToMany(models.User, { through: 'Order' })
    }
  }

  const { tableAttributes } = ProductSchema(sequelize, DataTypes)
  Product.init(tableAttributes, {
    sequelize,
    modelName: 'Product'
  })
  return Product
}
