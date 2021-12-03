import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText'
import ClearIcon from '@mui/icons-material/Clear'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import axios from 'axios'
import useUser from '@/_hooks/user'

import CompsStyledBadge from '@/components/layouts/navbar/Badge'

import useBag from '@/_hooks/useBag'
import getStripe from '@/_services/getstripe'

const ingredientsMapping = {
  'thick-top-bun': 'Brioche Top Bun',
  'thick-squid-top-bun': 'Squid Ink Top Bun',
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

export default function CompsDrawerBag() {
  const [openBag, setOpenBag] = useState(false)
  const [disableCheckout, setDisableCheckout] = useState(true)
  const [loading, setLoading] = useState(false)

  const { user } = useUser()
  const { bag, removeProduct } = useBag()

  console.log('bag', bag)

  const totalSum = bag.reduce((prev, item) => prev + item.subTotal, 0)
  const totalQty = bag.reduce((prev, item) => prev + item.quantity, 0)

  useEffect(() => {
    if (bag.length > 0) {
      setDisableCheckout(false)
    } else {
      setDisableCheckout(true)
    }
  }, [bag.length])

  const redirectToCheckout = async () => {
    const resp = await axios.post('/api/checkout_sessions', { bag })

    const stripe = await getStripe()
    await stripe.redirectToCheckout({ sessionId: resp.data.id })
  }

  const list = () => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
    >
      <Typography
        align="center"
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, mt: 1 }}
      >BAG
      </Typography>
      <Typography
        align="center"
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, mt: 5, mb: 2 }}
      >YOUR PICKUP ORDER
      </Typography>
      <Divider sx={{ p: 0 }} />
      <List>
        {
          bag.map((item, index) => {
            let allIngredients = []

            if (item?.product?.ingredients?.top) {
              allIngredients = [...allIngredients, item.product.ingredients.top]
            }

            if (item?.product?.ingredients?.middle?.length > 0) {
              allIngredients = [...allIngredients, ...item.product.ingredients.middle]
            }

            if (item?.product?.ingredients?.bot) {
              allIngredients = [...allIngredients, item.product.ingredients.bot]
            }
            return (
              <>
                <List key={item.product.id} sx={{ mb: 0 }}>
                  <ListItem sx={{ py: 0 }}>
                    <ListItemText sx={{ display: 'flex' }}>{item.quantity}x</ListItemText>
                    <ListItem>
                      <ListItemText sx={{ p: 0 }} primary={item.product.productName} />
                    </ListItem>
                    <ListItemText>{'$'}{item.subTotal} </ListItemText>
                    <ClearIcon className="clearIcon" sx={{ ml: 3 }} onClick={() => removeProduct(index)} />
                  </ListItem>
                </List>
                <ListItemText
                  sx={{ p: 0, ml: 3 }}
                  secondary={allIngredients.map((ingredient) => ingredientsMapping[ingredient]).join(', ')}
                />
                <Divider sx={{ p: 0 }} />
              </>
            )
          })
        }
      </List>
      {/* <Divider /> */}

      <Typography
        variant="h6"
        sx={{ mr: 5, my: 2 }}
        align="right"
      >
        Total: {'$'}{totalSum}
      </Typography>

      <Box textAlign="center">
        <LoadingButton
          variant="contained"
          loading={loading}
          loadingPosition="start"
          onClick={() => {
            setLoading(true)
            redirectToCheckout()
          }}
          color="secondary"
          sx={{ width: 200, mb: 3 }}
          disabled={disableCheckout || !user}
        >CHECKOUT</LoadingButton>
        {
          !user && <Typography variant="subtitle2" color="red">Please Register/Login to Checkout</Typography>
        }
      </Box>
    </Box>
  )

  return (
    <>
      <CompsStyledBadge badgeContent={totalQty} color="secondary">
        <Button onClick={() => setOpenBag(!openBag)} variant="contained" color="secondary" sx={{ mr: 1 }} startIcon={<LocalMallIcon />}>Bag</Button>
      </CompsStyledBadge>
      <Drawer
        id="drawer-bag"
        anchor="right"
        open={openBag}
        onClose={() => setOpenBag(false)}
      >
        {list('right')}
      </Drawer>
    </>
  )
}
