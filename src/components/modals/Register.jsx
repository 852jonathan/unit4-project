import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import Router from 'next/router'

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

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleRegisterSubmit = (values, methods) => {
    emailSignup(values).then(() => {
      Router.push('/')
    }).catch(() => {
      methods.setSubmitting(false)
      // setSnack({ message: 'Register invalid', open: true })
    })
  }

  return (
    <div>
      <Button color="info" onClick={handleOpen} sx={{ my: 2, mx: 1, p: 0 }}>NO ACCOUNT YET? REGISTER HERE!</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormsAuthSignup
              onSubmit={handleRegisterSubmit}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
