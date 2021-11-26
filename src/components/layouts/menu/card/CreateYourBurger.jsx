import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import NextLink from 'next/link'
import burgerCreateImg from '@/assets/burgercreate.png'

export default function CompsCardCreateYourBurger() {
  return (
    <NextLink href="/createburger" passHref>
      <ButtonBase>
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
        </Card>
      </ButtonBase>
    </NextLink>
  )
}
