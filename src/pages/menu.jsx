import { useState, useEffect } from 'react'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { useTranslation } from 'next-i18next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CompsLayout from '@/components/layouts/Layout'
import CompsCardCreateYourBurger from '@/components/layouts/menu/card/CreateYourBurger'
import CompsLayoutsMenuGrid from '@/components/layouts/menu/grid/MenuGrid'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['homepageOrdersAbout', 'common', 'storelocator', 'menubag'])
  }
})

export default function PagesMenu() {
  const [showButton, setShowButton] = useState(false)

  const { t } = useTranslation('menubag')

  useEffect(() => {
    const handler = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (

    <CompsLayout>
      <Head>
        <title>MAHABURGER - {t('menu2')}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div id="pages-menu">
        {showButton && (
        <Button
          onClick={scrollToTop}
          className="back-to-top"
          startIcon={<ArrowCircleUpIcon />}
        >
          {t('backToTop')}
        </Button>
        )}
        <Typography variant="h4" component="div" align="center" sx={{ m: 2 }}>
          {t('menu2')}
        </Typography>

        <Divider sx={{ m: 2, fontSize: '2rem' }}>
          <Chip label={t('specials')} color="warning" />
        </Divider>
        <Box display="flex" justifyContent="center">
          <CompsCardCreateYourBurger />
        </Box>
        <Divider sx={{ m: 2 }}>
          <Box align="center">

            <Chip label={t('burgers')} color="warning" />
          </Box>

        </Divider>
        <CompsLayoutsMenuGrid category="burgers" />
        <Divider sx={{ m: 2 }}>
          <Chip label={t('sides')} color="warning" />
        </Divider>
        <CompsLayoutsMenuGrid category="sides" />
        <Divider sx={{ m: 2 }}>
          <Chip label={t('drinks')} color="warning" />
        </Divider>

        <CompsLayoutsMenuGrid category="drinks" />
      </div>

    </CompsLayout>
  )
}
