import React, { useState } from 'react'

import { ThemeProvider } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover';


import MenuIcon from '@mui/icons-material/Menu'

import theme from '@/assets/theme'
import CompsStyledBadge from '@/components/layouts/navbar/Badge'
import FormsAuthLogin from '@/forms/Login'


// const preventDefault = (e) => e.preventDefault()

function LoginPopper() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
    <Box sx={{ flexGrow: 1 }}>
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

          <Button color="inherit" sx={{ mr: 3 }}>About Us</Button>
          <Button color="inherit" sx={{ mr: 3 }}>Menu</Button>
          <Button color="inherit" sx={{ mr: 3 }}>Store Locator</Button>

          <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }} >
            LOGO
          </Typography>


          <Button color="inherit" sx={{ mr: 3 }}>EN / 繁</Button>
          <Button color="inherit" sx={{ mr: 3 }}>My Profile</Button>
          <LoginPopper />


          <CompsStyledBadge badgeContent={5} color="secondary">
            <Button variant="contained" color="secondary">Bag</Button>
          </CompsStyledBadge>

        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  )
}
