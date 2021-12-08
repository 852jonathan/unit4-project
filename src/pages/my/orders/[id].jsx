import Head from 'next/head'
import { useRouter } from 'next/router'
// import { SWRConfig } from 'swr'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { useTranslation } from 'next-i18next'
import useOrder from '@/_hooks/order'
import withPrivateRoute from '@/_hocs/withPrivateRoute'
import { Order, OrderProduct } from '@/db/models'

import CompsLoading from '@/components/Loading'
import CompsLayout from '@/components/layouts/Layout'

function PagesMyOrdersShow() {
  const { query: { id } } = useRouter()
  const { order, isError, isLoading, errorMessage } = useOrder(id)
  const { t } = useTranslation('menubag')

  const ingredientsMapping = {
    'thin-top-bun': t('thin-top-bun'),
    'thin-squid-top-bun': t('thin-squid-top-bun'),
    'lettuce-leaf': t('lettuce-leaf'),
    tomato: t('tomato'),
    'back-bacon': t('back-bacon'),
    'red-pepper': t('red-pepper'),
    'rocket-leaf': t('rocket-leaf'),
    mushrooms: t('mushrooms'),
    'swiss-cheese': t('swiss-cheese'),
    'square-cheese': t('square-cheese'),
    pickles: t('pickles'),
    'grilled-beef-patty': t('grilled-beef-patty'),
    'bottom-bun': t('bottom-bun'),
    'squid-bottom-bun': t('squid-bottom-bun')
  }

  if (isLoading) return <CompsLoading />
  if (isError) return <div>{errorMessage}</div>

  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - Show Orders</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-my-orders-history">
        <Typography variant="h4" sx={{ ml: 3, mt: 3, borderBottom: 2 }}>Order ID#: {order.id}</Typography>

        <Box sx={{ ml: 3, mb: 3 }}>
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
                  <Typography sx={{ my: 3 }}>
                    Product: {item.Product.productName}

                    {(allIngredients.length > 0) && (<p> Ingredients: {allIngredients.map((ingredient) => ingredientsMapping[ingredient]).join(', ')}</p>)}
                    <p>
                      Quantity: {item.quantity}
                    </p>
                    Subtotal: {'$'}{item.subTotal}
                  </Typography>
                  <Divider />
                </div>

              )
            })
          }
          <Typography variant="h5" sx={{ borderTop: 2 }}>
            Total: {'$'}{order.grandTotal}
          </Typography>

        </Box>

      </div>
    </CompsLayout>
  )
}

// export function SWRShow({ fallback }) {
//   return (
//     <SWRConfig value={{ fallback }}>
//       <PagesMyOrdersShow />
//     </SWRConfig>
//   )
// }

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params, locale }) {
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
      },
      ...await serverSideTranslations(locale, ['homepageOrdersAbout', 'common', 'storelocator', 'menubag'])
    }
  }
}

export default withPrivateRoute(PagesMyOrdersShow)
