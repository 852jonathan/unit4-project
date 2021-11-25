import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'
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
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function CompsProductShow({ product }) {
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
        <Box sx={style}>
          <Typography id="modal-modal-title" textAlign="center" variant="h6" component="h2">
            {product.productName}
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <Box>Picture</Box>
              </Grid>
              <Grid item xs={8}>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {product.description}
                </Typography>

                <Box sx={{ maxWidth: 100, my: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel color="secondary" variant="standard" htmlFor="uncontrolled-native">
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

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {product.price}
                </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AddBoxIcon />}
                >Add to Bag
                </Button>
              </Grid>
            </Grid>
          </Box>

        </Box>

      </Modal>
    </ThemeProvider>

  )
}
