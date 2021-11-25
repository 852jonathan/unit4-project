/* eslint-disable*/
const { Faker } = require('fakergem')
const { Category, Product } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const burgers = await Category.findOrCreate({ where: { catName: 'burgers' } })
    const sides = await Category.findOrCreate({ where: { catName: 'sides' } })
    const drinks = await Category.findOrCreate({ where: { catName: 'drinks' } })

    await Product.destroy({ truncate: true })
    for (let i = 0; i < 10; i++) {
      await Product.create({
        productName: Faker.Commerce.productName(),
        description: Faker.Lorem.sentence(3),
        price: Faker.Number.between(50, 500),
        CategoryId: burgers[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['hamburger']) })
    }

    for (let i = 0; i < 3; i++) {
      await Product.create({
        productName: Faker.Commerce.productName(),
        description: Faker.Lorem.sentence(3),
        price: Faker.Number.between(50, 500),
        CategoryId: sides[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['frenchfries']) })
    }

    for (let i = 0; i < 3; i++) {
      await Product.create({
        productName: Faker.Commerce.productName(),
        description: Faker.Lorem.sentence(3),
        price: Faker.Number.between(100, 1000),
        CategoryId: drinks[0].id,
        image: Faker.LoremFlickr.image(`${Faker.Number.between(450, 550)}x${Faker.Number.between(450, 550)}`, ['softdrink']) })
    }
  }
}
