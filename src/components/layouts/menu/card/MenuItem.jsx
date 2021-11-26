import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'

import burgerCreateImg from '@/assets/burgercreate.png'

import CompsProductShow from '@/components/modals/ProductShow'

export default function CompsCardMenuItem({ product }) {
  // const [open, setOpen] = useState(false)
  // const handleOpen = () => setOpen(true)

  return (
    <ButtonBase>
      <Card sx={{ minWidth: 345, maxWidth: 345, height: 350 }}>
        <CardMedia
          component="img"
          height="150"
        // src={product.image}
          src={burgerCreateImg.src}
        />
        <CardContent>
          <Typography textAlign="center" gutterBottom variant="h5" component="div">
            {product.productName}
          </Typography>
          <Typography textAlign="center" gutterBottom variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography textAlign="center" variant="h5">
            $
            {' '}
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <CompsProductShow product={product} />
        </CardActions>
      </Card>
    </ButtonBase>
  )
}
