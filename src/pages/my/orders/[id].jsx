import Head from 'next/head'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import useOrder from '@/_hooks/order'
import withPrivateRoute from '@/_hocs/withPrivateRoute'
import { Order, OrderProduct } from '@/db/models'

import CompsLayout from '@/components/layouts/Layout'

const ingredientsMapping = {
  'thin-top-bun': 'Brioche Top Bun',
  'thin-squid-top-bun': 'Squid Ink Top Bun',
  'lettuce-leaf': 'Lettuce',
  tomato: 'Tomato',
  'back-bacon': 'Back Bacon',
  'red-pepper': 'Red Pepper',
  'rocket-leaf': 'Rocket Leaf',
  mushrooms: 'Mushrooms',
  'swiss-cheese': 'Swiss Cheese',
  'square-cheese': 'Square Cheese',
  pickles: 'Pickles',
  'grilled-beef-patty': 'Grilled Beef Patty',
  'bottom-bun': 'Bottom Bun',
  'squid-bottom-bun': 'Squid Ink Bottom Bun'
}

function PagesMyOrdersShow() {
  const { query: { id } } = useRouter()
  const { order, isError, isLoading, errorMessage } = useOrder(id)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{errorMessage}</div>

  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - Show Orders</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-my-orders-history">
        <h1>Order {'#'}{order.id}</h1>

        <main>
          {
            order.OrderProducts.map((item) => {
              let allIngredients = []
              const ingredientsList = JSON.parse(item.Product.ingredients)

              if (ingredientsList?.top) {
                allIngredients = [...allIngredients, ingredientsList.top]
              }

              if (ingredientsList?.middle?.length > 0) {
                allIngredients = [...allIngredients, ...ingredientsList.middle]
              }

              if (ingredientsList?.bot) {
                allIngredients = [...allIngredients, ingredientsList.bot]
              }

              return (
                <div key={item.id}>
                  <p> </p>
                  <div>
                    Product: {item.Product.productName}
                    <p>
                      Ingredients: {allIngredients.map((ingredient) => ingredientsMapping[ingredient]).join(', ')}
                    </p>
                    <p>
                      Quantity: {item.quantity}
                    </p>
                    Subtotal: {'$'}{item.subTotal}
                  </div>
                </div>

              )
            })
          }
          Grand Total: {'$'}{order.grandTotal}

        </main>

      </div>
    </CompsLayout>
  )
}

export function SWRShow({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <PagesMyOrdersShow />
    </SWRConfig>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const order = await Order.findByPk(Number(params.id), {
    include: {
      association: Order.OrderProducts,
      include: {
        association: OrderProduct.Product
      }
    }
  })

  if (!order) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      fallback: {
        [`/api/my/orders/${params.id}`]: { order: order.toJSON() }
      }
    }
  }
}

export default withPrivateRoute(SWRShow)
