import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { ThemeProvider } from '@mui/material'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Icon from '@mui/material/Icon'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import theme from '@/styles/theme'

export default function CompsFooter() {
  return (
    <ThemeProvider theme={theme}>

      <Box sx={{
        flexGrow: 1,
        bgcolor: 'primary.main' }}
      >
        <Divider />
        <Grid container spacing={3}>
          <Grid item xs>
            <Typography align="center" sx={{ my: 1 }}>NAVIGATION</Typography>
            <Divider />
            <Typography>
              <MenuItem sx={{ justifyContent: 'center' }}>
                <NextLink href="/aboutus">
                  <Typography>
                    About Us
                  </Typography>
                </NextLink>
              </MenuItem>
              <MenuItem sx={{ justifyContent: 'center' }}>

                <NextLink href="/menu">
                  <Typography>
                    Our Menu
                  </Typography>
                </NextLink>
              </MenuItem>
              <MenuItem sx={{ justifyContent: 'center' }}>
                <NextLink href="/storelocator">
                  <Typography>
                    Store Locator
                  </Typography>
                </NextLink>
              </MenuItem>
            </Typography>

          </Grid>

          <Grid item xs>
            <Typography align="center" sx={{ my: 1 }}>SOCIAL MEDIA</Typography>
            <Divider />
            <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
              <Icon fontSize="large">
                <InstagramIcon fontSize="large" />
              </Icon>
              <Icon fontSize="large">
                <FacebookIcon fontSize="large" />
              </Icon>
              <Icon fontSize="large">
                <TwitterIcon fontSize="large" />
              </Icon>
            </Box>

          </Grid>
          <Grid item xs>
            <Typography align="center" sx={{ my: 1 }}>MAHA</Typography>

            <Divider />
            <Box sx={{ flexGrow: 1, my: 2, p: 0, textAlign: 'center' }}>
              <Image
                className="z-index-999"
                src="/assets/logo3.png"
                alt="LOGO"
                height={64}
                width={200}
              />
            </Box>
            <Typography variant="subtitle2" sx={{ display: 'flex', justifyContent: 'center' }}>
              2021 MAHABURGER. ALL RIGHTS RESERVED.
            </Typography>

            <Typography variant="subtitle2" paragraph sx={{ display: 'flex', justifyContent: 'center', m: 0 }}>
              SOME INFORMATION ON THIS SITE
            </Typography>

            <Typography variant="subtitle2" paragraph sx={{ display: 'flex', justifyContent: 'center' }}>
              MAY VARY SLIGHTLY BY LOCATION.
            </Typography>

          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>

  )
}
