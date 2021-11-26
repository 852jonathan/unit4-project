import React from 'react'
import NextLink from 'next/link'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import { ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'

export default function VideoOverlay() {
  return (
    <ThemeProvider theme={theme}>

      <Box id="video-overlay" position="absolute" sx={{ '& > :not(style)': { m: 1 }, zIndex: 800, backdropFilter: 'blur(5px)' }}>
        <Typography variant="h3" color="white">Burger Shop</Typography>
        <Typography variant="h4" color="white">Freshly made burgers, made to order!</Typography>
        <NextLink href="/menu" passHref>
          <Fab variant="extended" color="secondary" aria-label="add">
            <RestaurantMenuIcon sx={{ mr: 1 }} />
            Explore our Menu
          </Fab>
        </NextLink>
      </Box>
    </ThemeProvider>

  )
}
