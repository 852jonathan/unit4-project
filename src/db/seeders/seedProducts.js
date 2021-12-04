/* eslint-disable*/
const { Faker } = require('fakergem')
const { Category, Product } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const burgers = await Category.findOrCreate({ where: { catName: 'burgers' } })
    const sides = await Category.findOrCreate({ where: { catName: 'sides' } })
    const drinks = await Category.findOrCreate({ where: { catName: 'drinks' } })

    await Product.destroy({ truncate: true })
      await Product.create({
        productName: 'Classic Cheeseburger',
        description: 'Classic beef cheeseburger with cheese, lettuce & tomatoes',
        price: 55,
        CategoryId: burgers[0].id,
        image: '/assets/menu/classic-cheeseburger.JPG'})

      await Product.create({
        productName: 'Double Cheeseburger with Mushrooms',
        description: 'Double beef cheeseburger with cheese, lettuce, tomatoes & mushrooms',
        price: 70,
        CategoryId: burgers[0].id,
        image: '/assets/menu/double-cheeseburger.JPG' })

      await Product.create({
        productName: 'Christmas Burger',
        description: 'Beef burger with a colorful mix of vegetables',
        price: 68,
        CategoryId: burgers[0].id,
        image: '/assets/menu/christmas-burger.JPG' })

      await Product.create({
        productName: 'Squid Ink Bun with Bacon',
        description: 'Squid Ink Bun With Bacon And Cheese',
        price: 65,
        CategoryId: burgers[0].id,
        image: '/assets/menu/squid-ink-bun-with-bacon.JPG'})

      await Product.create({
        productName: 'Color Combo Burger',
        description: 'A colorful mix of yummy flavors',
        price: 60,
        CategoryId: burgers[0].id,
        image: '/assets/menu/color-combo-burger.JPG'})

      await Product.create({
        productName: 'Gourmet Cheeseburger',
        description: 'A flavorful combination with swiss cheese and double onions!',
        price: 128,
        CategoryId: burgers[0].id,
        image: '/assets/menu/gourmet-cheeseburger.JPG'})

      await Product.create({
        productName: 'Mixbun Burger',
        description: 'Give this Dual Bun Burger A Try!',
        price: 90,
        CategoryId: burgers[0].id,
        image: '/assets/menu/mixbun-burger.JPG'})

      await Product.create({
        productName: 'Pickle Beef Burger',
        description: 'Pickle Burger With Tomato',
        price: 55,
        CategoryId: burgers[0].id,
        image: '/assets/menu/pickle-beef-burger.JPG' })

      await Product.create({
        productName: 'Mushroom Burger',
        description: 'A Delicious Combination Of Mushroom And Onions',
        price: 60,
        CategoryId: burgers[0].id,
        image: '/assets/menu/mushroom-burger.JPG' })

      await Product.create({
        productName: 'French Fries',
        description: 'A classic side to go with your burger, with ketchup!',
        price: 20,
        CategoryId: sides[0].id,
        image: '/assets/menu/fries.JPG'})

      await Product.create({
        productName: 'Potato Slices',
        description: 'Deep fried to perfection',
        price: 20,
        CategoryId: sides[0].id,
        image: '/assets/menu/potato-slices.JPG' })

      await Product.create({
        productName: 'Potato Wedges',
        description: 'Large wedges with a crunchy texture',
        price: 25,
        CategoryId: sides[0].id,
        image: '/assets/menu/potato-wedges.JPG'})

      await Product.create({
        productName: 'Red Cola',
        description: 'Red Cola: A classic soda',
        price: 18,
        CategoryId: drinks[0].id,
        image: '/assets/menu/red-cola.JPG' })

      await Product.create({
        productName: 'Green Can Soda',
        description: 'Green Can Soda: A green can classic',
        price: 18,
        CategoryId: drinks[0].id,
        image: '/assets/menu/green-soda.JPG'})

      await Product.create({
        productName: 'Strawberry Milkshake',
        description: 'Great with burgers!',
        price: 25,
        CategoryId: drinks[0].id,
        image: '/assets/menu/strawberry-milkshake.JPG'})
  }
}
