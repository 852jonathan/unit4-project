import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'

import AddBoxIcon from '@mui/icons-material/AddBox'
import { ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function CompsProductShow() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen} color="info">View Details</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ flexGrow: 1 }}>

          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ProductName
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ProductDescription
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>

            <Box sx={{ maxWidth: 100, my: 2 }}>
              <FormControl fullWidth>
                <InputLabel color="info" variant="standard" htmlFor="uncontrolled-native">
                  Quantity
                </InputLabel>
                <NativeSelect
                  defaultValue={1}
                  inputProps={{
                    name: 'quantity',
                    id: 'quantity'
                  }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </NativeSelect>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddBoxIcon />}
            >Add to Bag</Button>
          </Box>
        </Box>

      </Modal>
    </ThemeProvider>

  )
}
