import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import ClearIcon from '@mui/icons-material/Clear'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { ThemeProvider, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { useTranslation } from 'next-i18next'
import theme from '@/styles/theme'
import CompsLoading from '@/components/Loading'

import useBag from '@/_hooks/useBag'

// const menuItemNames = {
//   "Classic Cheeseburger"
//   "Double Cheeseburger with Mushrooms"
//   "Christmas Burger"
//   "Squid Ink Bun with Bacon"
//   "Color Combo Burger"
//   "Gourmet Cheeseburger"
//   "Mixbun Burger"
//   "Pickle Beef Burger"
//   "Mushroom Burger"
//   "French Fries"
//   "Potato Slices"
//   "Potato Wedges"
//   "Red Cola"
//   "Green Can Soda"
//   "Strawberry Milkshake"

// }

const styleMobile = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2
}

const styleDesktop = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2
}
export default function CompsCardMenuItem({ product, isLoading }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [snackbarShow, setSnackbarShow] = useState(false)
  const router = useRouter()
  const { t } = useTranslation('menubag')

  const mobileTheme = useTheme()
  const isMobile = useMediaQuery(mobileTheme.breakpoints.down('md'))

  // const [locale, setLocale] = useState(router.locale)

  const { addProduct } = useBag()

  const handleAddToBag = () => {
    addProduct({
      ProductId: product.id,
      quantity: Number(window.quantity.value),
      subTotal: product.price * Number(window.quantity.value),
      product,
      feature: false
    })
    handleClose()
  }

  const handleCloseSnackbar = (reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarShow(false)
  }

  const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />)

  const snackbar = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleCloseSnackbar}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  )

  return (
    <>
      <ButtonBase onClick={handleOpen}>
        <Card sx={{ minWidth: 345, maxWidth: 345, height: 280, border: 2, pt: 3, borderColor: '#ffc107' }}>
          <Image
            alt="menu"
            height="110"
            width="100%"
            src={product.image}

          />
          <CardContent>
            <Typography align="center" variant="h5" sx={{ fontWeight: 'bold' }}>
              {'$'}{product.price}
            </Typography>
            <Typography align="center" gutterBottom variant="h5" component="div">
              {router.locale === 'en' ? product.productName : product.productNameChi}

            </Typography>
            <Typography align="center" gutterBottom variant="body2" color="text.secondary">
              {router.locale === 'en' ? product.description : product.descriptionChi}

            </Typography>

          </CardContent>
        </Card>
      </ButtonBase>
      <ThemeProvider theme={theme}>
        <Snackbar
          open={snackbarShow}
          onClose={handleCloseSnackbar}
          action={snackbar}
          severity="success"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            {t('addedToBag')}
          </Alert>
        </Snackbar>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="productshow-title"
          aria-describedby="productshow-description"
        >
          {isMobile ? (
            <Box sx={styleMobile}>
              <Box sx={{ m: 0, p: 0, textAlign: 'end' }}>
                <ClearIcon className="clearIcon" onClick={() => handleClose()} />
              </Box>
              <Typography id="productshow-title" align="center" variant="h5" component="h2" sx={{ mb: 2 }}>
                {router.locale === 'en' ? product.productName : product.productNameChi}

              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                  <Grid align="center" item xs={12} md={8} sx={{ mx: 'auto' }}>
                    {isLoading ? (<CompsLoading />) : (
                      <Image
                        height={130}
                        width={120}
                        src={product.image}
                        alt="burger-selected"
                      />
                    )}
                  </Grid>
                  <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>

                    <Typography id="productshow-description" sx={{ mt: 2 }}>
                      {router.locale === 'en' ? product.description : product.descriptionChi}
                    </Typography>

                    <Box sx={{ maxWidth: 100, my: 2 }}>
                      <FormControl fullWidth>
                        <InputLabel color="secondary" variant="standard" htmlFor="uncontrolled-native">
                          {t('quantity')}
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

                    <Typography id="productshow-price" variant="h5" sx={{ my: 2, fontWeight: 'bold' }}>
                      {'$'}{product.price}
                    </Typography>

                    <Button
                      onClick={() => {
                        handleAddToBag()
                        setSnackbarShow(true)
                        setTimeout(() => {
                          setSnackbarShow(false)
                        }, 2000)
                      }}
                      variant="contained"
                      color="secondary"
                      startIcon={<AddBoxIcon />}
                    >{t('addToBag')}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ) : (
            <Box sx={styleDesktop}>
              <Box sx={{ m: 0, p: 0, textAlign: 'end' }}>
                <ClearIcon className="clearIcon" onClick={() => handleClose()} />
              </Box>
              <Typography id="productshow-title" align="center" variant="h5" component="h2" sx={{ mb: 2 }}>
                {router.locale === 'en' ? product.productName : product.productNameChi}

              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                  <Grid align="center" item xs={6} md={8} sx={{ mx: 'auto' }}>
                    {isLoading ? (<CompsLoading />) : (
                      <Image
                        height={250}
                        width={200}
                        src={product.image}
                        alt="burger-selected"
                      />
                    )}
                  </Grid>
                  <Grid item xs={6} md={8} sx={{ mx: 'auto' }}>

                    <Typography id="productshow-description" sx={{ mt: 2 }}>
                      {router.locale === 'en' ? product.description : product.descriptionChi}
                    </Typography>

                    <Box sx={{ maxWidth: 100, my: 2 }}>
                      <FormControl fullWidth>
                        <InputLabel color="secondary" variant="standard" htmlFor="uncontrolled-native">
                          {t('quantity')}
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

                    <Typography id="productshow-price" variant="h5" sx={{ my: 2, fontWeight: 'bold' }}>
                      {'$'}{product.price}
                    </Typography>

                    <Button
                      onClick={() => {
                        handleAddToBag()
                        setSnackbarShow(true)
                        setTimeout(() => {
                          setSnackbarShow(false)
                        }, 2000)
                      }}
                      variant="contained"
                      color="secondary"
                      startIcon={<AddBoxIcon />}
                    >{t('addToBag')}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )}
        </Modal>
      </ThemeProvider>
    </>

  )
}
