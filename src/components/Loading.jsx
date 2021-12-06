import React from 'react'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export default function CompsLoading() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="success" />
    </Box>
  )
}
