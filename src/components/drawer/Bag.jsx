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
import LocalMallIcon from '@mui/icons-material/LocalMall'

import CompsStyledBadge from '@/components/layouts/navbar/Badge'

export default function CompsDrawerBag() {
  const [openBag, setOpenBag] = useState(false)

  const list = () => (
    <Box
      sx={{ width: 250 }}
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
        {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Sub Total', 'Total'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
          <CompsStyledBadge badgeContent={5} color="secondary">
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
