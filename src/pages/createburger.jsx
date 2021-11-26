import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import CompsLayout from '@/components/layouts/Layout'
import FormsProductCreateBurger from '@/forms/products/createburger'

import theme from '@/styles/theme'

export default function PagesCreateABurger() {
  return (
    <CompsLayout>
      <Head>
        <title>MahaBurger - Create a Burger</title>
      </Head>

      <div id="pages-createburger">
        <ThemeProvider theme={theme}>
          <Typography textAlign="center" variant="h4" sx={{ my: 2 }}>Create a Burger</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8} />
              <Grid item xs={8}>
                <FormsProductCreateBurger />
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>

      </div>
    </CompsLayout>
  )
}
