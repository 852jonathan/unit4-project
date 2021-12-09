import React, { useState } from 'react'

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
import { useTranslation } from 'next-i18next'

import useBag from '@/_hooks/useBag'

export default function FormsProductCreateBurger({ ingredients, setIngredients }) {
  const { t } = useTranslation('menubag')
  const [topBunSelected, setTopBunSelected] = useState(false)
  const [botBunSelected, setBotBunSelected] = useState(false)
  const [topError, setTopError] = useState(false)
  const [botError, setBotError] = useState(false)
  const [topHelperText, setTopHelperText] = useState(t('chooseBun'))
  const [botHelperText, setBotHelperText] = useState(t('chooseBun'))
  const [snackbarShow, setSnackbarShow] = useState(false)
  const [snackbarErrorShow, setSnackbarErrorShow] = useState(false)
  const [buttonDisable, setButtonDisable] = useState(false)

  const { addProduct } = useBag()
  const createData = (name, price, link) => ({ name, price, link })

  const topBunRows = [
    createData(t('thin-top-bun'), 12, 'thin-top-bun'),
    createData(t('thin-squid-top-bun'), 15, 'thin-squid-top-bun')
  ]

  const botBunRows = [
    createData(t('bottom-bun'), 12, 'bottom-bun'),
    createData(t('squid-bottom-bun'), 15, 'squid-bottom-bun')
  ]

  const ingredientRows = [
    createData(t('lettuce-leaf'), 15, 'lettuce-leaf'),
    createData(t('tomato'), 18, 'tomato'),
    createData(t('grilled-beef-patty'), 35, 'grilled-beef-patty'),
    createData(t('back-bacon'), 20, 'back-bacon'),
    createData(t('red-pepper'), 15, 'red-pepper'),
    createData(t('rocket-leaf'), 18, 'rocket-leaf'),
    createData(t('mushrooms'), 18, 'mushrooms'),
    createData(t('swiss-cheese'), 18, 'swiss-cheese'),
    createData(t('pickles'), 18, 'pickles'),
    createData(t('square-cheese'), 18, 'square-cheese')
  ]

  const handleClose = (reason) => {
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
      setTopHelperText(t('bunSelected'))
      setBotHelperText(t('bunSelected'))
      setSnackbarShow(true)

      addProduct({
        quantity: 1,
        subTotal: calcTotal(),
        product: {
          productName: t('customBurger'),
          productNameChi: t('customBurger'),
          ingredients,
          price: calcTotal()
        },
        feature: false
      })
    } else if (topBunSelected === false) {
      setTopHelperText(t('selectTopBun'))
      setTopError(true)
      setSnackbarErrorShow(true)
    } else if (botBunSelected === false) {
      setBotHelperText(t('selectBotBun'))
      setBotError(true)
      setSnackbarErrorShow(true)
    } else {
      setTopHelperText(t('selectTopBun'))
      setBotHelperText(t('selectBotBun'))
      setTopError(true)
      setBotError(true)
    }
  }

  return (
    <>
      <Typography variant="h5">{t('topBun')}</Typography>
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

      <Typography variant="h5">{t('ingredients')}</Typography>
      <FormHelperText sx={{ ml: '14px' }}>{t('chooseIngredients')}</FormHelperText>
      <List>
        <Grid container spacing={2} columns={12}>

          <Grid item xs={12} md={6}>
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

          <Grid item xs={12} md={6}>
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

      <Typography variant="h5">{t('botBun')}</Typography>
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
      <Typography variant="h5" sx={{ mb: 1 }}>{t('subtotal')}{'$'}{`${calcTotal()}`} </Typography>
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
          {t('customBurgerAdded')}
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
          {t('selectBothBuns')}
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
        >{t('addToBag')}

        </Button>
      </Box>
    </>
  )
}
