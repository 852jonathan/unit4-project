import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import burgerCreateImg from '@/assets/burgercreate.png'

import CompsProductShow from '@/components/modals/ProductShow'

export default function CompsCardMenuItem() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="150"
        src={burgerCreateImg}
      />

      <CardContent>
        <Typography textAlign="center" gutterBottom variant="h5" component="div">
          A Product
        </Typography>
        <Typography textAlign="center" gutterBottom variant="body2" color="text.secondary">
          Product Description A burger with the freshest ingredients!
        </Typography>
        <Typography textAlign="center" variant="h5">
          $68
        </Typography>
      </CardContent>
      <CardActions>
        <CompsProductShow />
      </CardActions>
    </Card>
  )
}
