import React, { useState } from 'react'
import Router from 'next/router'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import ClearIcon from '@mui/icons-material/Clear'

import { useTranslation } from 'next-i18next'
import useUser from '@/_hooks/user'
import FormsAuthSignup from '@/forms/auth/Register'

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function CompsModalsRegister() {
  const [open, setOpen] = useState(false)
  const { emailSignup } = useUser()
  const { t } = useTranslation('common')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleRegisterSubmit = (values, methods) => {
    emailSignup(values).then(() => {
      handleClose()
      if (window.location.pathname === '/menu') {
        Router.reload(window.location.pathname)
      } else {
        Router.push('/menu')
      }
    }).catch(() => {
      methods.setSubmitting(false)
      // setSnack({ message: 'Register invalid', open: true })
    })
  }

  return (
    <div>
      <Button color="info" onClick={handleOpen} sx={{ my: 2, mx: 1, p: 0 }}>{t('noAccountYetRegister')}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ m: 0, p: 0, textAlign: 'end' }}>
            <ClearIcon className="clearIcon" onClick={() => handleClose()} />
          </Box>
          <FormsAuthSignup
            onSubmit={handleRegisterSubmit}
          />
        </Box>
      </Modal>
    </div>
  )
}
