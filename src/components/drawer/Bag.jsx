import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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
import { useTranslation } from 'next-i18next'
import useUser from '@/_hooks/user'

import CompsStyledBadge from '@/components/layouts/navbar/Badge'

import useBag from '@/_hooks/useBag'
import getStripe from '@/_services/getstripe'

export default function CompsDrawerBag() {
  const [openBag, setOpenBag] = useState(false)
  const [disableCheckout, setDisableCheckout] = useState(true)
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation(['common', 'menubag'])
  const router = useRouter()

  const { user } = useUser()
  const { bag, removeProduct } = useBag()

  const totalSum = bag.reduce((prev, item) => prev + item.subTotal, 0)
  const totalQty = bag.reduce((prev, item) => prev + item.quantity, 0)

  const ingredientsMapping = {
    'thin-top-bun': t('thin-top-bun', { ns: 'menubag' }),
    'thin-squid-top-bun': t('thin-squid-top-bun', { ns: 'menubag' }),
    'lettuce-leaf': t('lettuce-leaf', { ns: 'menubag' }),
    tomato: t('tomato', { ns: 'menubag' }),
    'back-bacon': t('back-bacon', { ns: 'menubag' }),
    'red-pepper': t('red-pepper', { ns: 'menubag' }),
    'rocket-leaf': t('rocket-leaf', { ns: 'menubag' }),
    mushrooms: t('mushrooms', { ns: 'menubag' }),
    'swiss-cheese': t('swiss-cheese', { ns: 'menubag' }),
    'square-cheese': t('square-cheese', { ns: 'menubag' }),
    pickles: t('pickles', { ns: 'menubag' }),
    'grilled-beef-patty': t('grilled-beef-patty', { ns: 'menubag' }),
    'bottom-bun': t('bottom-bun', { ns: 'menubag' }),
    'squid-bottom-bun': t('squid-bottom-bun', { ns: 'menubag' })
  }

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
      >{t('bag')}
      </Typography>
      <Typography
        align="center"
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, mt: 5, mb: 2 }}
      >{t('pickupOrder', { ns: 'menubag' })}
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
                    <ListItemText sx={{ display: 'flex' }}>{item.quantity}</ListItemText>
                    <ListItem>
                      {router.locale === 'en' ? (<ListItemText sx={{ p: 0 }} primary={item.product.productName} />) : (<ListItemText sx={{ p: 0 }} primary={item.product.productNameChi} />)}

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

      <Typography
        variant="h6"
        sx={{ mr: 5, my: 2 }}
        align="right"
      >
        {t('total', { ns: 'menubag' })} {'$'}{totalSum}
      </Typography>

      <Box textAlign="center">
        <LoadingButton
          variant="contained"
          loading={loading}
          onClick={() => {
            setLoading(true)
            redirectToCheckout()
          }}
          color="secondary"
          sx={{ width: 200, mb: 3 }}
          disabled={disableCheckout || !user}
        >{t('checkout', { ns: 'menubag' })}</LoadingButton>
        {
          !user && <Typography variant="subtitle2" color="red">{t('regLoginToCheckout', { ns: 'menubag' })}</Typography>
        }
      </Box>
    </Box>
  )

  return (
    <>
      <CompsStyledBadge invisible={false} badgeContent={totalQty} color="secondary">
        <Button onClick={() => setOpenBag(!openBag)} variant="contained" color="secondary" sx={{ mr: 1 }} startIcon={<LocalMallIcon />}>{t('bag')}</Button>
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
