import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import LinearProgress from '@mui/material/LinearProgress'
import theme from '@/styles/theme'

export default function CompsNavLoading() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, margin: 0 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: 'flex', height: '64px', justifyContent: 'center' }}>
            <LinearProgress color="success" />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}
