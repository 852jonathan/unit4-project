import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { ThemeProvider, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import LanguageIcon from '@mui/icons-material/Language'
import useUser from '@/_hooks/user'
import CompsNavLoading from '@/components/NavbarLoading'

import theme from '@/styles/theme'
import CompsLayoutsNavbarProfile from '@/components/layouts/navbar/Profile'
import CompsPopoverLogin from '@/components/popover/Login'
import CompsDrawerBag from '@/components/drawer/Bag'
import CompsNavbarMobile from '@/components/layouts/navbar/MobileNavbar'

export default function CompsLayoutsNavbar() {
  const { t } = useTranslation('common')

  const { user, isLoading } = useUser()
  const router = useRouter()
  const mobileTheme = useTheme()
  const isMobile = useMediaQuery(mobileTheme.breakpoints.down('md'))
  if (isLoading) return <CompsNavLoading />

  return (
    <ThemeProvider theme={theme}>
      <Box id="navbar" sx={{ flexGrow: 1, margin: 0 }}>
        <AppBar position="static">
          {isMobile ? (
            <CompsNavbarMobile />
          ) : (
            <Toolbar sx={{ display: 'flex', height: '64px' }}>
              <NextLink href="/aboutus" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>{t('aboutUs')}</Button>
              </NextLink>
              <NextLink href="/menu" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>{t('menu')}
                </Button>
              </NextLink>
              <NextLink href="/storelocator" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>{t('storeLocator')}</Button>
              </NextLink>
              <Box navlogo width="20%" textAlign="center" sx={{ flexGrow: 1, my: 'auto', p: 0 }}>
                <NextLink href="/" passHref>
                  <Image
                    className="z-index-999 navlogo"
                    src="/assets/logo3.png"
                    alt="LOGO"
                    height={64}
                    width={200}
                    priority
                  />
                </NextLink>
              </Box>
              <NextLink
                href={router.pathname}
                locale={router.locale === 'en' ? 'zh' : 'en'}
                passHref
              >
                <Button color="inherit" sx={{ mr: 3 }} startIcon={<LanguageIcon fontSize="large" />}>EN / 繁</Button>
              </NextLink>
              {
                user && <CompsLayoutsNavbarProfile />
              }
              {
                !user && <CompsPopoverLogin />
              }
              <CompsDrawerBag />

            </Toolbar>
          )}
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}
