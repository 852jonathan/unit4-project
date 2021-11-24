import { useState } from 'react'

import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import FormsAuthLogin from '@/forms/Login'
// import FormsAuthLogin from '@/forms/Test'

export default function CompsPopoverLogin() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
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
          onSubmit={() => {
            // TODO temp
          }}
        />
      </Popover>
    </div>
  )
}
