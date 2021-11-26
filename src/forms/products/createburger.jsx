import React, { useState } from 'react'
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

export default function FormsProductCreateBurger() {
  const [topBun, setTopBun] = useState('thick-top-bun')
  const [botBun, setBotBun] = useState('thick-bottom-bun')

  const handleTopBunChange = (e) => {
    setTopBun(e.target.value)
  }
  const handleBotBunChange = (e) => {
    setBotBun(e.target.value)
  }

  return (
    // <ThemeProvider theme={theme}>
    //   <Typography textAlign="center" variant="h4" sx={{ my: 2 }}>Create a Burger</Typography>
    //   <Box sx={{ flexGrow: 1 }}>
    //     <Grid container spacing={2} columns={16}>
    //       <Grid item xs={8} />
    //       <Grid item xs={8}>
    <>
      <Typography variant="h5"> Top Bun </Typography>
      <List>
        <FormControl component="fieldset">
          <RadioGroup
            name="top-bun-group"
            value={topBun}
            onChange={handleTopBunChange}
          >
            <FormControlLabel value="thick-top-bun" control={<Radio size="small" color="info" />} label="Brioche Top Bun" />
            <FormControlLabel value="squid-top-bun" control={<Radio size="small" color="info" />} label="Squid Ink Top Bun" />
          </RadioGroup>
        </FormControl>
      </List>
      <Typography variant="h5"> Ingredients </Typography>
      <List>
        {['Lettuce', 'Tomato', 'Bacon'].map((text, price) => (
          <FormGroup>
            <FormControlLabel control={<Checkbox size="small" color="info" />} name={text} label={text} key={text}>
              <FormControlLabel primary={text} />
              <FormControlLabel primary={price} />
            </FormControlLabel>
          </FormGroup>
        ))}
      </List>
      <Typography variant="h5"> Bottom Bun </Typography>
      <List>
        <FormControl component="fieldset">
          <RadioGroup
            name="bot-bun-group"
            value={botBun}
            onChange={handleBotBunChange}
          >
            <FormControlLabel value="thick-bottom-bun" control={<Radio size="small" color="info" />} label="Bottom Bun" />
            <FormControlLabel value="squid-bottom-bun" control={<Radio size="small" color="info" />} label="Squid Ink Bottom Bun" />
          </RadioGroup>
        </FormControl>
      </List>
      {/* //     </Grid> */}
      {/* //   </Grid> */}
      {/* // </Box> */}
      <Box>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddBoxIcon />}
        >Add to Bag
        </Button>
      </Box>
    </>
  // </ThemeProvider>
  )
}
