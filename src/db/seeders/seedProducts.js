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
        productNameChi: '經典芝士漢堡',
        description: 'Classic beef cheeseburger with cheese, lettuce & tomatoes',
        descriptionChi: '經典牛肉芝士漢堡配生菜和番茄',
        price: 55,
        CategoryId: burgers[0].id,
        image: '/assets/menu/classic-cheeseburger.JPG',
        feature: true
    })

      await Product.create({
        productName: 'Double Cheeseburger with Mushrooms',
        productNameChi: '蘑菇雙層芝士漢堡',
        description: 'Double beef cheeseburger with cheese, lettuce, tomatoes & mushrooms',
        descriptionChi: '雙層牛肉芝士漢堡配生菜、番茄和蘑菇',
        price: 70,
        CategoryId: burgers[0].id,
        image: '/assets/menu/double-cheeseburger.JPG',
        feature: true
      })

      await Product.create({
        productName: 'Christmas Burger',
        productNameChi: '聖誕漢堡',
        description: 'Beef burger with a colorful mix of vegetables',
        descriptionChi: '牛肉漢堡與五顏六色的蔬菜混合',
        price: 68,
        CategoryId: burgers[0].id,
        image: '/assets/menu/christmas-burger.JPG',
        feature: true
      })

      await Product.create({
        productName: 'Squid Ink Bun with Bacon',
        productNameChi: '煙肉墨魚汁包',
        description: 'Squid Ink Bun With Bacon And Cheese',
        descriptionChi: '煙肉和芝士墨魚汁包',
        price: 65,
        CategoryId: burgers[0].id,
        image: '/assets/menu/squid-ink-bun-with-bacon.JPG',
        feature: true
      })

      await Product.create({
        productName: 'Color Combo Burger',
        productNameChi: '彩色組合漢堡',
        description: 'A colorful mix of yummy flavors',
        descriptionChi: '色彩繽紛的美味組合',
        price: 60,
        CategoryId: burgers[0].id,
        image: '/assets/menu/color-combo-burger.JPG',
        feature: true
      })

      await Product.create({
        productName: 'Gourmet Cheeseburger',
        productNameChi: '豪華芝士漢堡',
        description: 'A flavorful combination with swiss cheese and double onions!',
        descriptionChi: '與瑞士芝士和雙洋蔥的美味組合！',
        price: 128,
        CategoryId: burgers[0].id,
        image: '/assets/menu/gourmet-cheeseburger.JPG',
        feature: true
      })

      await Product.create({
        productName: 'Mixbun Burger',
        productNameChi: '混合漢堡',
        description: 'Give this Dual Bun Burger A Try!',
        descriptionChi: '試試這個雙包漢堡吧！',
        price: 90,
        CategoryId: burgers[0].id,
        image: '/assets/menu/mixbun-burger.JPG',
        feature: true
      })

      await Product.create({
        productName: 'Pickle Beef Burger',
        productNameChi: '醃青瓜牛肉漢堡',
        description: 'Pickle Burger With Tomato',
        descriptionChi: '番茄醃青瓜漢堡',
        price: 55,
        CategoryId: burgers[0].id,
        image: '/assets/menu/pickle-beef-burger.JPG' ,
        feature: true
      })

      await Product.create({
        productName: 'Mushroom Burger',
        productNameChi: '蘑菇漢堡',
        description: 'A Delicious Combination Of Mushroom And Rocket Leaf',
        descriptionChi: '蘑菇和火箭葉的美味組合',
        price: 60,
        CategoryId: burgers[0].id,
        image: '/assets/menu/mushroom-burger.JPG' ,
        feature: true
      })

      await Product.create({
        productName: 'French Fries',
        productNameChi: '炸薯條',
        description: 'A classic side to go with your burger, with ketchup!',
        descriptionChi: '經典的一薯條搭配你的漢堡和番茄醬！',
        price: 20,
        CategoryId: sides[0].id,
        image: '/assets/menu/fries.JPG',
        feature: true
      })

      await Product.create({
        productName: 'Potato Slices',
        productNameChi: '薯片',
        description: 'Deep fried to perfection',
        descriptionChi: '炸至完美',
        price: 20,
        CategoryId: sides[0].id,
        image: '/assets/menu/potato-slices.JPG' ,
        feature: true
      })

      await Product.create({
        productName: 'Potato Wedges',
        productNameChi: '薯角',
        description: 'Large wedges with a crunchy texture',
        descriptionChi: '質地鬆脆的薯角',
        price: 25,
        CategoryId: sides[0].id,
        image: '/assets/menu/potato-wedges.JPG',
        feature: true
      })

      await Product.create({
        productName: 'Red Cola',
        productNameChi: '紅罐汽水',
        description: 'Red Cola: A classic soda',
        descriptionChi: '紅罐汽水：經典汽水',
        price: 18,
        CategoryId: drinks[0].id,
        image: '/assets/menu/red-cola.JPG' ,
        feature: true
      })

      await Product.create({
        productName: 'Green Can Soda',
        productNameChi: '綠罐汽水',
        description: 'Green Can Soda: A green can classic',
        descriptionChi: '綠罐汽水：經典的綠罐汽水',
        price: 18,
        CategoryId: drinks[0].id,
        image: '/assets/menu/green-soda.JPG',
        feature: true
      })

      await Product.create({
        productName: 'Strawberry Milkshake',
        productNameChi: '士多啤梨奶昔',
        description: 'Great with burgers!',
        descriptionChi: '配漢堡包最正！',
        price: 25,
        CategoryId: drinks[0].id,
        image: '/assets/menu/strawberry-milkshake.JPG',
        feature: true
      })
    }
}
