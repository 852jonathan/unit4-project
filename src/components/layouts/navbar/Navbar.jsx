import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'

import { ThemeProvider, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import LanguageIcon from '@mui/icons-material/Language'
import useUser from '@/_hooks/user'

import theme from '@/styles/theme'
import CompsLayoutsNavbarProfile from '@/components/layouts/navbar/Profile'
import CompsPopoverLogin from '@/components/popover/Login'
import CompsDrawerBag from '@/components/drawer/Bag'
import CompsNavbarMobile from '@/components/layouts/navbar/MobileNavbar'

export default function CompsLayoutsNavbar() {
  const { user } = useUser()

  const mobileTheme = useTheme()
  const isMobile = useMediaQuery(mobileTheme.breakpoints.down('md'))

  return (

    <ThemeProvider theme={theme}>

      <Box id="navbar" sx={{ flexGrow: 1, margin: 0 }}>
        <AppBar position="static">
          {isMobile ? (
            <CompsNavbarMobile />
          ) : (
            <Toolbar sx={{ display: 'flex', height: '64px' }}>
              <NextLink href="/aboutus" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>About Us</Button>
              </NextLink>
              <NextLink href="/menu" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>Our Menu</Button>
              </NextLink>
              <NextLink href="/storelocator" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>Store Locator</Button>
              </NextLink>
              <Box width="20%" textAlign="center" sx={{ flexGrow: 1, my: 'auto', p: 0 }}>
                <NextLink href="/" passHref>
                  <Image
                    className="z-index-999"
                    src="/assets/logo3.png"
                    alt="LOGO"
                    height={64}
                    width={200}
                    priority
                  />
                </NextLink>
              </Box>

              <Button color="inherit" sx={{ mr: 3 }} startIcon={<LanguageIcon fontSize="large" />}>EN / 繁</Button>
              {
                user && <CompsLayoutsNavbarProfile />
              }
              {
                !user && <CompsPopoverLogin />
              }
              <CompsDrawerBag />

            </Toolbar>
          )}
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}
