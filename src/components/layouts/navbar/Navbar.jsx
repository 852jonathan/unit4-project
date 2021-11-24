import React, { useState } from 'react'
import NextLink from 'next/link'

import { ThemeProvider } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'

import LocalMallIcon from '@mui/icons-material/LocalMall'
import MenuIcon from '@mui/icons-material/Menu'
import LanguageIcon from '@mui/icons-material/Language'

import theme from '@/assets/theme'
import CompsStyledBadge from '@/components/layouts/navbar/Badge'
import FormsAuthLogin from '@/forms/Login'


// const preventDefault = (e) => e.preventDefault()

function LoginPopper() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
        <Button onClick={handleClick} color="inherit" sx={{ mr: 3 }}>Register/Login</Button>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <FormsAuthLogin/>
      </Popover>
    </div>
  );
}

export default function CompsLayoutsNavbar() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static" >
      {/* <AppBar position="static" elevation={0} > Remove shadow */}
        <Toolbar sx={{ display: 'flex'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>


          <NextLink href="/aboutus" passHref>
            <Button color="inherit" sx={{ mr: 3 }}>About Us</Button>
          </NextLink>
          <NextLink href="/menu" passHref>
            <Button color="inherit" sx={{ mr: 3 }}>Menu</Button>
          </NextLink>
          <NextLink href="/storelocator" passHref>
            <Button color="inherit" sx={{ mr: 3 }}>Store Locator</Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}
              >LOGO
            </Typography>
          </NextLink>

          <Button color="inherit" sx={{ mr: 3 }} startIcon={<LanguageIcon fontSize="large"/>}>EN / 繁</Button>
          <Button color="inherit" sx={{ mr: 3 }}>My Profile</Button>
          <LoginPopper />

          <CompsStyledBadge badgeContent={5} color="secondary">
            <Button variant="contained" color="secondary" startIcon={<LocalMallIcon />}>Bag</Button>
          </CompsStyledBadge>

        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  )
}
