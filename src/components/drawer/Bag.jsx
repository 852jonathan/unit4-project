import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import ClearIcon from '@mui/icons-material/Clear'
import LocalMallIcon from '@mui/icons-material/LocalMall'

import CompsStyledBadge from '@/components/layouts/navbar/Badge'

import useBag from '@/_hooks/useBag'

export default function CompsDrawerBag() {
  const [openBag, setOpenBag] = useState(false)
  const { bag, removeProduct } = useBag()

  console.log(bag)

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
      <Divider />
      <List>
        {bag.map((item, index) => (
          <>
            <ListItem key={item.product.id}>
              <Typography> {item.quantity} x</Typography>
              <Typography sx={{ justifyContent: 'center' }}>{item.product.productName} </Typography>
              <Typography>{item.subTotal} </Typography>

              <Typography sx={{ flexGrow: 1, mt: 5, mb: 2 }}>{item.product.ingredients} </Typography>
              <ClearIcon onClick={() => removeProduct(index)} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      {/* <Divider /> */}
      <Typography
        variant="h6"
        sx={{ m: 3 }}
      >
        Total:
      </Typography>
      <Box textAlign="center">
        <Button
          variant="contained"
          onClick={() => alert('clicked')}
          color="secondary"
          sx={{ width: 200 }}
        >CHECKOUT</Button>
      </Box>
    </Box>
  )

  return (
    <>

      {['right'].map((anchor) => (
        <>
          <CompsStyledBadge badgeContent={bag.length} color="secondary">
            <Button onClick={() => setOpenBag(!openBag)} variant="contained" color="secondary" startIcon={<LocalMallIcon />}>Bag</Button>
          </CompsStyledBadge>
          <Drawer
            id="drawer-bag"
            anchor="right"
            open={openBag}
            onClose={() => setOpenBag(false)}
          >
            {list(anchor)}
          </Drawer>
        </>
      ))}
    </>
  )
}
