import Router from 'next/router'

import { useState, useContext } from 'react'

import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
// import { SnackbarContext } from '@/components/snackbar/Toast'
import FormsAuthLogin from '@/forms/auth/Login'

import useUser from '@/_hooks/user'

export default function CompsPopoverLogin() {
  // const { setSnack } = useContext(SnackbarContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const { emailLogin } = useUser()

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLoginSubmit = (values, methods) => {
    emailLogin(values).then(() => {
      Router.push('/aboutus')
    }).catch(() => {
      methods.setSubmitting(false)
      // setSnack({ message: 'Login credentials invalid', open: true })
    })
  }

  const open = Boolean(anchorEl)
  const id = open ? 'login-popover' : undefined

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
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <FormsAuthLogin
          onSubmit={handleLoginSubmit}
        />
      </Popover>
    </div>
  )
}
