import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import burgerCreateImg from '@/assets/burgercreate.png'

import CompsProductShow from '@/components/modals/ProductShow'

export default function CompsCardCreateYourBurger() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="150"
        src={burgerCreateImg.src}
      />

      <CardContent>
        <Typography textAlign="center" gutterBottom variant="h5" component="div">
          Create your Own Burger!
        </Typography>
        <Typography textAlign="center" gutterBottom variant="body2" color="text.secondary">
          Create your own burger with the freshest ingredients!
        </Typography>
      </CardContent>
      <CardActions>
        <CompsProductShow product={{}} />
      </CardActions>
    </Card>
  )
}
