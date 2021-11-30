import React, { useState, useEffect } from 'react'
import produce from 'immer'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import { ThemeProvider } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox'

import theme from '@/styles/theme'

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
  const calcTotal = () => {
    const topPrice = topBunRows.find((row) => row.link === ingredients.top)?.price || 0

    // const midPrice = ingredientRows.forEach((row) => row.link === ingredients.middle)?.price || 0
    const botPrice = botBunRows.find((row) => row.link === ingredients.bot)?.price || 0

    return topPrice + midPrice + botPrice
  }

  const handleTopBunChange = (e) => {
    setIngredients(produce(ingredients, (draft) => {
      const top = e.target.value
      draft.top = top
    }))
  }

  const handleBotBunChange = (e) => {
    setIngredients(produce(ingredients, (draft) => {
      const bot = e.target.value
      draft.bot = bot
    }))
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

  return (
    <>
      <Typography variant="h5"> Top Bun </Typography>
      <List>
        <FormControl component="fieldset">
          {topBunRows.map((row) => (
            <RadioGroup key={row.name}>
              <FormControlLabel
                control={<Radio size="small" color="info" />}
                name={row.name}
                label={`${row.name} - $ ${row.price}`}
                value={row.link}
                data-price={row.price}
                checked={ingredients.top === row.link}
                onChange={(e) => handleTopBunChange(e, row.price)}
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
        <FormControl component="fieldset">
          {botBunRows.map((row) => (
            <RadioGroup key={row.name}>
              <FormControlLabel
                control={<Radio size="small" color="info" />}
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
      <Typography variant="h5" sx={{ mb: 1 }}> Subtotal: $ {`${calcTotal()}`} </Typography>

      <Box>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddBoxIcon />}
        >Add to Bag
        </Button>
      </Box>
    </>
  )
}
