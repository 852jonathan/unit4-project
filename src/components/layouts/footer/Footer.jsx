import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export default function CompsFooter() {
  return (
    <Box sx={{ flexGrow: 1, my: 3 }}>
      <Divider />
      <Typography textAlign="center"> FOOTER </Typography>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item textAlign="center">NAVIGATION</Item>
        </Grid>
        <Grid item xs={6}>
          <Item textAlign="center">MIDDLE</Item>
        </Grid>
        <Grid item xs>
          <Item textAlign="center">SOCIAL MEDIA</Item>
        </Grid>
      </Grid>
    </Box>
  )
}
