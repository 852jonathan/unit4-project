import Head from 'next/head'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import CompsLayout from '@/components/layouts/Layout'
// import CompsImageList from '@/components/imagelist/ImageList'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['homepageorders', 'common', 'storelocator', 'menubag'])
  }
})
export default function PagesAboutUs() {
  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - About Us</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

      </Head>
      <div id="pages-aboutus">
        <Typography align="center" variant="h4" sx={{ my: 3 }}>ABOUT US</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} order={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
            <Box sx={{ mx: 0, mb: 3 }}>
              {/* <CompsImageList /> */}
              <Typography variant="h5" sx={{ mx: 3, mb: 3 }}>
                Long before we opened the doors, we started in our kitchen. We were aiming for nothing short of perfection.
              </Typography>
              <Typography variant="subtitle1" sx={{ mx: 3 }}>

                Today, every hand-pressed burger that leaves our kitchen is made from our unique blend of sirloin, round and prime Wagyu Beef. It’s authentic, free of preservatives and flame-grilled to juicy perfection.
                But we didn’t stop…
              </Typography>
              <Typography variant="subtitle1" sx={{ mx: 3, my: 1 }}>
                How could we? Fries were about to be reimagined. Whether you order the fries, the potato slices or the potato wedges, they are all made from real Russet potatoes cut with the skin on. They’re washed in a cycle to remove the starch and cooked in vegetable oil for a crispy taste and golden exterior.
              </Typography>
              <Typography variant="h6" sx={{ mx: 3, my: 1 }}>
                All our products are served from the heart, and we look forward to serving you!
              </Typography>
              <Typography variant="subtitle2" sx={{ mx: 3, my: 3 }}>
                Please note that we are only a fictional shop, we do not actually exist!
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} order={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box sx={{ mx: 0, mb: 3 }}>
              <Image
                src="/assets/aboutusburger.png"
                alt="aboutus-burger"
                layout="responsive"
                height={80}
                width={150}
              />
            </Box>
          </Grid>

        </Grid>

      </div>
    </CompsLayout>
  )
}
