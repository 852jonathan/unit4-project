import React, { useState } from 'react'
import NextLink from 'next/link'

import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import LanguageIcon from '@mui/icons-material/Language'
import MenuIcon from '@mui/icons-material/Menu'

import CompsDrawerBag from '@/components/drawer/Bag'
import CompsLayoutsNavbarProfile from '@/components/layouts/navbar/Profile'

function CompsNavbarMobile() {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer
        id="mobile-navbar"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="left"
      >
        <List>

          <ListItem>
            <ListItemText>
              <NextLink href="/" passHref>
                <Button color="inherit" sx={{ mr: 3, mt: 5 }}>Back to Home</Button>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <NextLink href="/aboutus" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>About Us</Button>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <NextLink href="/menu" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>Our Menu</Button>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <NextLink href="/storelocator" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>Store Locator</Button>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <CompsLayoutsNavbarProfile />
          </ListItem>
          {/* <ListItem /> */}
          <ListItem>
            <Button color="inherit" sx={{ mr: 3 }} startIcon={<LanguageIcon fontSize="large" />}>EN / 繁</Button>
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ display: 'flex' }}>

        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon sx={{ ml: 3 }} />
        </IconButton>
        <NextLink href="/" passHref>
          <Typography
            align="center"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >LOGO
          </Typography>
        </NextLink>
        <CompsDrawerBag />

      </Box>
    </>
  )
}
export default CompsNavbarMobile
