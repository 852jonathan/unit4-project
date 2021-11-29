import React, { useState } from 'react'
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

export default function FormsProductCreateBurger({ ingredients, setIngredients }) {
  const [checked, setChecked] = useState(0)

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
        setChecked(checked - 1)
        console.log('remove ingredient:', checked)
      } else {
        draft.middle.push(ingredient)
        setChecked(checked + 1)
        console.log('add ingredient:', checked)
      }
    }))
  }

  function createData(name, price) {
    return { name, price }
  }

  const topBunRows = [
    createData('Brioche Top Bun', 12),
    createData('Squid Ink Top Bun', 15)
  ]
  const botBunRows = [
    createData('Bottom Bun', 12),
    createData('Squid Ink Bottom Bun', 15)
  ]

  const ingredientRows = [
    createData('Lettuce', 15),
    createData('Tomato', 18),
    createData('Grilled Beef Patty', 35),
    createData('Back Bacon', 20),
    createData('Red Pepper', 15),
    createData('Rocket Leaf', 18),
    createData('Mushrooms', 18),
    createData('Swiss Cheese', 18),
    createData('Pickles', 18),
    createData('Square Cheese', 18)
  ]

  // const shouldDisableCheckbox = (value) => {
  //   const maxAllowed = 3
  //   return setChecked(checked.length >= maxAllowed && checked.indexOf(value) === -1)
  // }

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
                value={row.name}
                checked={ingredients.top === row.name}
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
                  value={row.name}
                  checked={ingredients.middle.includes(row.name)}
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
                  value={row.name}
                  checked={ingredients.middle.includes(row.name)}
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
                value={row.name}
                checked={ingredients.bot === row.name}
                onChange={handleBotBunChange}
              />
            </RadioGroup>
          ))}
        </FormControl>
      </List>
      <Typography variant="h5"> Subtotal: </Typography>
      {topBunRows.map((row) => (
        <Typography key={row.name}>
          {/* {checked.ingredients.price} */}
        </Typography>
      ))}
      {botBunRows.map((row) => (
        <Typography key={row.name}>
          value={row.price}
        </Typography>
      ))}

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
