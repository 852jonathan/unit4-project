import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import ImageGallery from 'react-image-gallery'
import CompsLayout from '@/components/layouts/Layout'
// import CompsImageList from '@/components/imagelist/ImageList'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['homepageOrdersAbout', 'common', 'storelocator', 'menubag'])
  }
})

const images = [
  {
    original: '/assets/aboutus/aboutusburger.png'
  },
  {
    original: '/assets/aboutus/eating1.JPG'
  },
  {
    original: '/assets/aboutus/eating2.JPG'
  },
  {
    original: '/assets/aboutus/eating3.JPG'
  },
  {
    original: '/assets/aboutus/eating4.JPG'
  }
]
const AboutUsGallery = () => (
  <ImageGallery
    items={images}
    showThumbnails={false}
    showFullscreenButton={false}
    showPlayButton={false}
    showBullets
  />
)
export default function PagesAboutUs() {
  const { t } = useTranslation('homepageOrdersAbout')

  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - {t('aboutUs')}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

      </Head>
      <div id="pages-aboutus">
        <Typography align="center" variant="h4" sx={{ my: 3 }}>{t('aboutUs')}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} order={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
            <Box sx={{ mx: 0, mb: 3 }}>
              {/* <CompsImageList /> */}
              <Typography variant="h5" sx={{ mx: 3, mb: 3 }}>
                {t('about1')}
              </Typography>
              <Typography variant="subtitle1" sx={{ mx: 3 }}>
                {t('about2')}
              </Typography>
              <Typography variant="subtitle1" sx={{ mx: 3 }}>
                {t('about3')}
              </Typography>
              <Typography variant="subtitle1" sx={{ mx: 3, my: 1 }}>
                {t('about4')}
              </Typography>
              <Typography variant="h6" sx={{ mx: 3, my: 1 }}>
                {t('about5')}
              </Typography>
              <Typography variant="subtitle2" sx={{ mx: 3, my: 3 }}>
                {t('about6')}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} order={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box sx={{ mx: 0, mb: 3 }}>
              <AboutUsGallery />
              {/* <Image
                src="/assets/aboutusburger.png"
                alt="aboutus-burger"
                layout="responsive"
                height={80}
                width={150}
              /> */}
            </Box>
          </Grid>

        </Grid>

      </div>
    </CompsLayout>
  )
}
