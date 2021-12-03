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
        description: 'Classic beef cheeseburger with cheese & lettuce',
        price: 55,
        CategoryId: burgers[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['hamburger']) })

      await Product.create({
        productName: 'Double Cheeseburger',
        description: 'Double beef cheeseburger with cheese, lettuce & tomatoes',
        price: 70,
        CategoryId: burgers[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['hamburger']) })

      await Product.create({
        productName: 'Christmas Burger',
        description: 'Beef burger with a colorful mix of vegetables',
        price: 68,
        CategoryId: burgers[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['hamburger']) })

      await Product.create({
        productName: 'Squid Ink Bun with Bacon',
        description: 'Squid Ink Bun With Bacon And Cheese',
        price: 65,
        CategoryId: burgers[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['hamburger']) })

      await Product.create({
        productName: 'Color Combo Burger',
        description: 'A colorful mix of yummy flavors',
        price: 60,
        CategoryId: burgers[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['hamburger']) })

      await Product.create({
        productName: 'Gourmet Cheeseburger',
        description: 'A flavorful combination!',
        price: 128,
        CategoryId: burgers[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['hamburger']) })

      await Product.create({
        productName: 'Mixbun Burger',
        description: 'Give this Dual Bun Burger A Try!',
        price: 90,
        CategoryId: burgers[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['hamburger']) })

      await Product.create({
        productName: 'Pickle Beef Burger',
        description: 'Pickle Burger With Tomato',
        price: 55,
        CategoryId: burgers[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['hamburger']) })

      await Product.create({
        productName: 'Mushroom Burger',
        description: 'A Delicious Combination Of Mushroom And Onions',
        price: 60,
        CategoryId: burgers[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['hamburger']) })

      await Product.create({
        productName: 'French Fries',
        description: 'A classic side to go with your burger, with ketchup!',
        price: 20,
        CategoryId: sides[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['frenchfries']) })

      await Product.create({
        productName: 'Hashbrown',
        description: 'Deep fried to perfection',
        price: 20,
        CategoryId: sides[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['frenchfries']) })

      await Product.create({
        productName: 'Potato Wedges',
        description: 'Large wedges with a crunchy texture',
        price: 25,
        CategoryId: sides[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['frenchfries']) })

      await Product.create({
        productName: 'Red Cola',
        description: 'Red Cola: A classic soda',
        price: 18,
        CategoryId: drinks[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['softdrink']) })

      await Product.create({
        productName: 'Green Can Soda',
        description: 'Green Can Soda: A green can classic',
        price: 18,
        CategoryId: drinks[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['softdrink']) })

      await Product.create({
        productName: 'Strawberry Milkshake',
        description: 'Great with burgers!',
        price: 25,
        CategoryId: drinks[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['softdrink']) })
  }
}
