import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CompsLayoutsMenuCardMenuItem from '@/components/layouts/menu/card/MenuItem'

//

export default function CompsLayoutsMenuGrid() {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
      <Grid container spacing={{ md: 2 }} columnSpacing={{ md: 0.5 }} columns={{ sm: 8, md: 12 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid display="flex" justifyContent="center" item xs={2} sm={4} md={4} key={index}>
            <CompsLayoutsMenuCardMenuItem />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
