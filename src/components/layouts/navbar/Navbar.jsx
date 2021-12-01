import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'

import { ThemeProvider, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import MenuIcon from '@mui/icons-material/Menu'
import LanguageIcon from '@mui/icons-material/Language'

import theme from '@/styles/theme'
import CompsLayoutsNavbarProfile from '@/components/layouts/navbar/Profile'
import CompsPopoverLogin from '@/components/popover/Login'
import CompsDrawerBag from '@/components/drawer/Bag'
import CompsNavbarMobile from '@/components/layouts/navbar/MobileNavbar'

// const preventDefault = (e) => e.preventDefault()

export default function CompsLayoutsNavbar() {
  // if (currentUser) {
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <Box sx={{ flexGrow: 1, margin: 0 }}>
  //         <AppBar position="static">
  //           {/* <AppBar position="static" elevation={0} > // Remove shadow */}
  //           <Toolbar sx={{ display: 'flex' }}>
  //             <IconButton
  //               size="large"
  //               edge="start"
  //               color="inherit"
  //               aria-label="menu"
  //               sx={{ mr: 2 }}
  //             >
  //               <MenuIcon />
  //             </IconButton>

  //             <NextLink href="/aboutus" passHref>
  //               <Button color="inherit" sx={{ mr: 3 }}>About Us</Button>
  //             </NextLink>
  //             <NextLink href="/menu" passHref>
  //               <Button color="inherit" sx={{ mr: 3 }}>Menu</Button>
  //             </NextLink>
  //             <NextLink href="/storelocator" passHref>
  //               <Button color="inherit" sx={{ mr: 3 }}>Store Locator</Button>
  //             </NextLink>
  //             <NextLink href="/" passHref>
  //               <Typography
  //                 align="center"
  //                 variant="h6"
  //                 component="div"
  //                 sx={{ flexGrow: 1 }}
  //               >LOGO
  //               </Typography>
  //             </NextLink>

  //             <Button color="inherit" sx={{ mr: 3 }} startIcon={<LanguageIcon fontSize="large" />}>EN / 繁</Button>
  //             <CompsLayoutsNavbarProfile />

  //             <CompsStyledBadge badgeContent={5} color="secondary">
  //               <Button variant="contained" color="secondary" startIcon={<LocalMallIcon />}>Bag</Button>
  //             </CompsStyledBadge>

  //           </Toolbar>
  //         </AppBar>
  //       </Box>
  //     </ThemeProvider>
  //   )
  // }

  const mobileTheme = useTheme()
  const isMobile = useMediaQuery(mobileTheme.breakpoints.down('md'))

  return (
    <ThemeProvider theme={theme}>

      <Box id="navbar" sx={{ flexGrow: 1, margin: 0 }}>
        <AppBar position="static">
          {/* <AppBar position="static" elevation={0} > // Remove shadow */}
          {isMobile ? (
            <CompsNavbarMobile />
          ) : (
            <Toolbar sx={{ display: 'flex' }}>
              {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}

              <NextLink href="/aboutus" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>About Us</Button>
              </NextLink>
              <NextLink href="/menu" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>Our Menu</Button>
              </NextLink>
              <NextLink href="/storelocator" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>Store Locator</Button>
              </NextLink>
              <NextLink href="/" passHref>
                {/* <Typography
                  align="center"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >LOGO
                </Typography> */}
                <Box width="20%" sx={{ flexGrow: 1, m: 0, p: 0 }}>
                  <Image
                    className="z-index-999"
                    src="/assets/logo3.png"
                    alt="LOGO"
                    height={64}
                    width={200}
                  />
                </Box>

              </NextLink>

              <Button color="inherit" sx={{ mr: 3 }} startIcon={<LanguageIcon fontSize="large" />}>EN / 繁</Button>
              <CompsLayoutsNavbarProfile />

              <CompsPopoverLogin />
              <CompsDrawerBag />
              {/* <CompsStyledBadge badgeContent={5} color="secondary">
              <Button variant="contained" color="secondary" startIcon={<LocalMallIcon />}>Bag</Button>
            </CompsStyledBadge> */}

            </Toolbar>
          )}
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}
