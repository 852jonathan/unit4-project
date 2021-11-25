import nc from 'next-connect'
import { Product } from '@/db/models'

const ProductsIndex = async (req, res) => {
  const { query: { category } } = req

  const products = await Product.findAll({
    include: {
      association: Product.Category,
      where: category ? { catName: category } : {}
    }
  })

  return res.status(200).json({ products })
}

export default nc()
  .use(ProductsIndex)
