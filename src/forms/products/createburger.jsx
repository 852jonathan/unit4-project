import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import produce from 'immer'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'

import Snackbar from '@mui/material/Snackbar'

import MuiAlert from '@mui/material/Alert'

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import AddBoxIcon from '@mui/icons-material/AddBox'

import useBag from '@/_hooks/useBag'

const createData = (name, price, link) => ({ name, price, link })

const topBunRows = [
  createData('Brioche Top Bun', 12, 'thick-top-bun'),
  createData('Squid Ink Top Bun', 15, 'thick-squid-top-bun')
]
const botBunRows = [
  createData('Bottom Bun', 12, 'bottom-bun'),
  createData('Squid Ink Bottom Bun', 15, 'squid-bottom-bun')
]

const ingredientRows = [
  createData('Lettuce', 15, 'lettuce-leaf'),
  createData('Tomato', 18, 'tomato'),
  createData('Grilled Beef Patty', 35, 'grilled-beef-patty'),
  createData('Back Bacon', 20, 'back-bacon'),
  createData('Red Pepper', 15, 'red-pepper'),
  createData('Rocket Leaf', 18, 'rocket-leaf'),
  createData('Mushrooms', 18, 'mushrooms'),
  createData('Swiss Cheese', 18, 'swiss-cheese'),
  createData('Pickles', 18, 'pickles'),
  createData('Square Cheese', 18, 'square-cheese')
]

export default function FormsProductCreateBurger({ ingredients, setIngredients }) {
  const [topBunSelected, setTopBunSelected] = useState(false)
  const [botBunSelected, setBotBunSelected] = useState(false)
  const [topError, setTopError] = useState(false)
  const [botError, setBotError] = useState(false)
  const [topHelperText, setTopHelperText] = useState('Please choose a bun:')
  const [botHelperText, setBotHelperText] = useState('Please choose a bun:')
  const [snackbarShow, setSnackbarShow] = useState(false)
  const [snackbarErrorShow, setSnackbarErrorShow] = useState(false)
  const [buttonDisable, setButtonDisable] = useState(false)

  const { addProduct } = useBag()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarShow(false)
    setSnackbarErrorShow(false)
  }

  const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />)

  const snackbar = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  )

  const calcTotal = () => {
    const topPrice = topBunRows.find((row) => row.link === ingredients.top)?.price || 0

    const midPrice = ingredients.middle.reduce((prev, ingredient) => {
      const price = ingredientRows.find((row) => row.link === ingredient)?.price || 0
      return prev + price
    }, 0)

    const botPrice = botBunRows.find((row) => row.link === ingredients.bot)?.price || 0

    return topPrice + midPrice + botPrice
  }

  const handleTopBunChange = (e) => {
    setIngredients(produce(ingredients, (draft) => {
      const top = e.target.value
      draft.top = top
    }))
    setTopBunSelected(true)
  }

  const handleBotBunChange = (e) => {
    setIngredients(produce(ingredients, (draft) => {
      const bot = e.target.value
      draft.bot = bot
    }))
    setBotBunSelected(true)
  }

  const handleIngredientsChange = (e) => {
    setIngredients(produce(ingredients, (draft) => {
      const ingredient = e.target.value
      const index = draft.middle.indexOf(ingredient)
      if (index >= 0) {
        draft.middle.splice(index, 1)
      } else {
        draft.middle.push(ingredient)
      }
    }))
  }

  const handleAddToBag = () => {
    if (topBunSelected && botBunSelected === true) {
      setTopError(false)
      setBotError(false)
      setTopHelperText('Bun selected')
      setBotHelperText('Bun selected')
      setSnackbarShow(true)

      addProduct({
        quantity: 1,
        subTotal: calcTotal(),
        product: {
          productName: 'Custom Burger',
          ingredients,
          price: calcTotal()
        },
        feature: true
      })
      console.log('ingredients:', ingredients)
    } else if (topBunSelected === false) {
      setTopHelperText('Please select a top bun.')
      setTopError(true)
      setSnackbarErrorShow(true)
    } else if (botBunSelected === false) {
      setBotHelperText('Please select a bottom bun.')
      setBotError(true)
      setSnackbarErrorShow(true)
    } else {
      setTopHelperText('Please select a top bun.')
      setBotHelperText('Please select a bottom bun.')
      setTopError(true)
      setBotError(true)
    }
  }

  return (
    <>
      <Typography variant="h5"> Top Bun </Typography>
      <List>
        <FormControl component="fieldset" error={topError}>
          <FormHelperText>{topHelperText}</FormHelperText>
          {topBunRows.map((row) => (
            <RadioGroup key={row.name}>
              <FormControlLabel
                control={<Radio size="small" color="info" required />}
                name={row.name}
                label={`${row.name} - $ ${row.price}`}
                value={row.link}
                data-price={row.price}
                checked={ingredients.top === row.link}
                onChange={handleTopBunChange}

              />
            </RadioGroup>
          ))}
        </FormControl>
      </List>

      <Typography variant="h5"> Ingredients </Typography>
      <List>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={6}>
            {ingredientRows.slice(0, 5).map((row) => (
              <FormGroup key={row.name}>
                <FormControlLabel
                  control={<Checkbox size="small" color="info" />}
                  name={row.name}
                  label={`${row.name} - $ ${row.price}`}
                  value={row.link}
                  checked={ingredients.middle.includes(row.link)}
                  onChange={handleIngredientsChange}
                />
              </FormGroup>
            ))}
          </Grid>

          <Grid item xs={6}>
            {ingredientRows.slice(5).map((row) => (
              <FormGroup key={row.name}>
                <FormControlLabel
                  control={<Checkbox size="small" color="info" />}
                  name={row.name}
                  label={`${row.name} - $ ${row.price}`}
                  value={row.link}
                  checked={ingredients.middle.includes(row.link)}
                  onChange={handleIngredientsChange}
                />
              </FormGroup>
            ))}
          </Grid>
        </Grid>
      </List>

      <Typography variant="h5"> Bottom Bun </Typography>
      <List>
        <FormControl component="fieldset" error={botError}>
          <FormHelperText>{botHelperText}</FormHelperText>
          {botBunRows.map((row) => (
            <RadioGroup key={row.name}>
              <FormControlLabel
                control={<Radio size="small" color="info" required />}
                name={row.name}
                label={`${row.name} - $ ${row.price}`}
                value={row.link}
                checked={ingredients.bot === row.link}
                onChange={handleBotBunChange}
              />
            </RadioGroup>
          ))}
        </FormControl>
      </List>
      <Typography variant="h5" sx={{ mb: 1 }}> Subtotal: {'$'}{`${calcTotal()}`} </Typography>
      <Snackbar
        open={snackbarShow}
        autoHideDuration={5000}
        onClose={handleClose}
        action={snackbar}
        severity="success"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >

        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Custom Burger Added!
        </Alert>
      </Snackbar>
      <Snackbar
        open={snackbarErrorShow}
        autoHideDuration={3000}
        onClose={handleClose}
        action={snackbar}
        severity="error"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Please select both top and bottom buns!
        </Alert>
      </Snackbar>

      <Box>
        <Button
          disabled={buttonDisable}
          variant="contained"
          color="secondary"
          startIcon={<AddBoxIcon />}
          onClick={() => {
            handleAddToBag()
            setButtonDisable(true)
            setTimeout(() => {
              setButtonDisable(false)
              setSnackbarShow(false)
              setSnackbarErrorShow(false)
            }, 2000)
          }}
        >Add to Bag
        </Button>
      </Box>
    </>
  )
}
