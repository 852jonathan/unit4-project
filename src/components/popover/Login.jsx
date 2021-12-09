import React, { useEffect, useState } from 'react'
// import React, { useState, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import ClearIcon from '@mui/icons-material/Clear'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'next-i18next'
import { toast } from 'react-toastify'

// import { SnackbarContext } from '@/components/snackbar/Toast'
import FormsAuthLogin from '@/forms/auth/Login'

import useUser from '@/_hooks/user'

import CompsModalsRegister from '@/components/modals/Register'

export default function CompsPopoverLogin() {
  // const { setToast } = useContext(SnackbarContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const [showHttpMsg, setShowHttpMsg] = useState(false)
  const { emailLogin } = useUser()
  const { pathname } = useRouter()
  const { t } = useTranslation('common')

  useEffect(() => {
    if (window.location.protocol === 'http:') {
      setShowHttpMsg(true)
    }
  }, [])

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLoginSubmit = (values, methods) => {
    emailLogin(values).then(() => {
      handleClose()
      Router.push('/menu')
    }).catch(() => {
      methods.setSubmitting(false)
      toast.error('Login credentials incorrect, please try again', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      })
      // setToast({ message: 'Login credentials invalid', open: true })
    })
  }

  const open = Boolean(anchorEl)
  const id = open ? 'login-popover' : undefined

  return (
    <div>
      <Button onClick={handleClick} color="inherit" sx={{ mr: 3 }}>{t('registerLogin')}</Button>
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
        {
          showHttpMsg && <Typography align="center" color="red">Please refresh the page with https://</Typography>
        }
        <Box sx={{ mr: 2, mt: 2, textAlign: 'end' }}>
          <ClearIcon className="clearIcon" onClick={() => handleClose()} />
        </Box>
        <FormsAuthLogin
          onSubmit={handleLoginSubmit}
        />
        <Box sx={{ mx: 'auto', width: '40px', height: '40px' }}>
          <a href={`/api/auth/facebook/login?returnTo=${pathname}`}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </Box>
        <Box textAlign="center">
          <CompsModalsRegister />
        </Box>
      </Popover>
    </div>
  )
}
