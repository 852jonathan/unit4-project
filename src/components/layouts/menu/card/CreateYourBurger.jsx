import * as React from 'react'
import Image from 'next/image'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import NextLink from 'next/link'
import burgerCreateImg from '/public/assets/burgercreate.jpg'

export default function CompsCardCreateYourBurger() {
  return (
    <NextLink href="/createburger" passHref>
      <ButtonBase>
        <Card align="center" sx={{ maxWidth: 345, border: 2, borderColor: '#ffc107' }}>
          {/* <CardMedia
            component="img"
            height="150"
            src={burgerCreateImg.src}
          /> */}
          <Image
            alt="CreateABurger"
            height="200"
            width="300"
            // layout="responsive"
            src={burgerCreateImg.src}
          />

          <CardContent>
            <Typography align="center" gutterBottom variant="h5" component="div">
              Create your Own Burger!
            </Typography>
            <Typography align="center" gutterBottom variant="body2" color="text.secondary">
              Create your own burger with the ingredients of your choice!
            </Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    </NextLink>
  )
}
