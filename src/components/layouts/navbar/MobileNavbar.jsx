import React, { useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'

import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

import LanguageIcon from '@mui/icons-material/Language'
import MenuIcon from '@mui/icons-material/Menu'
import CompsPopoverLogin from '@/components/popover/Login'
import useUser from '@/_hooks/user'

import CompsDrawerBag from '@/components/drawer/Bag'
import CompsLayoutsNavbarProfile from '@/components/layouts/navbar/Profile'

function CompsNavbarMobile() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const { user } = useUser()

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
              NAVIGATION
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <NextLink href="/" passHref>
                <Button color="inherit" sx={{ mr: 3, mt: 2 }}>Back to Home</Button>
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
          <Divider />
          <ListItem>
            <Button color="inherit" sx={{ mr: 3 }} startIcon={<LanguageIcon fontSize="large" />}>EN / 繁</Button>
          </ListItem>
          {
                user && <ListItem><CompsLayoutsNavbarProfile /></ListItem>
              }
          {
              !user && <ListItem><CompsPopoverLogin /> </ListItem>
            }
        </List>
      </Drawer>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon sx={{ ml: 3 }} />
        </IconButton>
        <NextLink href="/" passHref>
          <Box sx={{ flexGrow: 1, m: 0, p: 0, textAlign: 'center' }}>
            <Image
              className="z-index-999"
              src="/assets/logopic.png"
              alt="LOGO"
              height={64}
              width={64}
            />
          </Box>
        </NextLink>

        <CompsDrawerBag />
      </Toolbar>
    </>
  )
}
export default CompsNavbarMobile
