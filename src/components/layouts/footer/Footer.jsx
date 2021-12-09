import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { ThemeProvider } from '@mui/material/styles'
import { useTranslation } from 'next-i18next'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import theme from '@/styles/theme'

export default function CompsFooter() {
  const { t } = useTranslation('common')

  return (
    <ThemeProvider theme={theme}>

      <Box sx={{
        flexGrow: 1,
        bgcolor: 'primary.main' }}
      >
        <Divider />
        <Grid container spacing={3}>
          <Grid item xs>
            <Typography align="center" sx={{ my: 1 }}>{t('navigation')}</Typography>
            <Divider />
            <Typography>
              <MenuItem sx={{ justifyContent: 'center' }}>
                <NextLink href="/aboutus">
                  <Typography>
                    {t('aboutUs')}
                  </Typography>
                </NextLink>
              </MenuItem>
              <MenuItem sx={{ justifyContent: 'center' }}>

                <NextLink href="/menu">
                  <Typography>
                    {t('menu')}
                  </Typography>
                </NextLink>
              </MenuItem>
              <MenuItem sx={{ justifyContent: 'center' }}>
                <NextLink href="/storelocator">
                  <Typography>
                    {t('storeLocator')}
                  </Typography>
                </NextLink>
              </MenuItem>
            </Typography>

          </Grid>

          <Grid item xs>
            <Typography align="center" sx={{ my: 1 }}>{t('socialMedia')}</Typography>
            <Divider />
            <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
              <IconButton>
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <TwitterIcon fontSize="large" />
              </IconButton>
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
                priority
              />
            </Box>
            <Typography variant="subtitle2" sx={{ display: 'flex', justifyContent: 'center' }}>
              2021 MAHABURGER. {t('allRightsReserved')}
            </Typography>

            <Typography variant="subtitle2" paragraph sx={{ display: 'flex', justifyContent: 'center', m: 0 }}>
              {t('someInfo1')}
            </Typography>

            <Typography variant="subtitle2" paragraph sx={{ display: 'flex', justifyContent: 'center' }}>
              {t('someInfo2')}
            </Typography>

          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>

  )
}
