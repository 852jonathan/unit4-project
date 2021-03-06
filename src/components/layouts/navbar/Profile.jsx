import React, { useState } from 'react'
import Router from 'next/router'
import NextLink from 'next/link'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'

import useUser from '@/_hooks/user'

export default function CompsLayoutsNavbarProfile() {
  const [anchorEl, setAnchorEl] = useState(null)
  const { authLogout } = useUser()
  const { t } = useTranslation('common')

  const open = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    setAnchorEl(null)
    authLogout().then(() => {
      Router.push('/')
    })
  }

  return (
    <div>
      <Button onClick={handleClick} color="inherit" sx={{ mr: 3 }}>{t('profile')}</Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <MenuItem>
          <NextLink href="/my/orders">
            <Typography>
              {t('myOrderHistory')}
            </Typography>
          </NextLink>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          {t('logout')}
        </MenuItem>
      </Menu>
    </div>
  )
}
