import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox'

import { ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'

import useBag from '@/_hooks/useBag'

import burgerCreateImg from '/public/assets/burgercreate.png'

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function CompsCardMenuItem({ product }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { addProduct } = useBag()

  const handleAddToBag = () => {
    addProduct({
      ProductId: product.id,
      quantity: Number(window.quantity.value),
      subTotal: product.price * Number(window.quantity.value),
      product
    })
    handleClose()
  }

  return (
    <>
      <ButtonBase onClick={handleOpen}>
        <Card sx={{ minWidth: 345, maxWidth: 345, height: 350 }}>
          <CardMedia
            component="img"
            height="150"
        // src={product.image}
            src={burgerCreateImg.src}
          />
          <CardContent>
            <Typography textAlign="center" gutterBottom variant="h5" component="div">
              {product.productName}
            </Typography>
            <Typography textAlign="center" gutterBottom variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography textAlign="center" variant="h5">
              $
              {' '}
              {product.price}
            </Typography>
          </CardContent>
        </Card>
      </ButtonBase>
      <ThemeProvider theme={theme}>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="productshow-title"
          aria-describedby="productshow-description"
        >
          <Box sx={style}>
            <Typography id="productshow-title" textAlign="center" variant="h5" component="h2" sx={{ mb: 2 }}>
              {product.productName}
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                  <CardMedia
                    component="img"
                    height="250"
                    // src={product.image}
                    src={burgerCreateImg.src}
                  />
                </Grid>
                <Grid item xs={8}>

                  <Typography id="productshow-description" sx={{ mt: 2 }}>
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

                  <Typography id="productshow-price" variant="h5" sx={{ my: 2 }}>
                    $ {product.price}
                  </Typography>

                  <Button
                    onClick={handleAddToBag}
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
    </>

  )
}
