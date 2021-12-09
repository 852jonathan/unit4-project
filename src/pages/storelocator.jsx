import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// import { useTheme } from '@mui/material'
// import useMediaQuery from '@mui/material/useMediaQuery'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'
import ReactMapGL, { Marker as MapMarker, Popup as MapPopup, NavigationControl, FlyToInterpolator } from 'react-map-gl'
import produce from 'immer'
import { easeCubic } from 'd3-ease'
import { useTranslation } from 'next-i18next'

import CompsLayout from '@/components/layouts/Layout'

const navControlStyle = {
  right: 10,
  top: 10
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['homepageOrdersAbout', 'common', 'storelocator', 'menubag'])
  }
})

export default function PagesStoreLocator() {
  const { t } = useTranslation('storelocator')

  const [stores, setStores] = useState([
    {
      id: 1,
      name: t('mainshop'),
      address: t('mainshopAddress'),
      telephone: '2123 4567',
      latitude: 22.280806027643074,
      longitude: 114.12911830826918,
      offsetLeft: -10,
      offsetTop: -50,
      showPopup: false
    }, {
      id: 2,
      name: t('secondShop'),
      address: t('secondShopAddress'),
      telephone: '2987 6543',
      latitude: 22.28211,
      longitude: 114.1285920,
      offsetLeft: 0,
      offsetTop: -50,
      showPopup: false
    }, {
      id: 3,
      name: t('causewayBayShop'),
      address: t('causewayBayAddress'),
      telephone: '2369 1010',
      latitude: 22.27939,
      longitude: 114.1855059,
      offsetLeft: 0,
      offsetTop: 0,
      showPopup: false
    }
  ])

  const [viewport, setViewport] = useState({
    width: '95%',
    height: '80vh',
    latitude: 22.281494,
    longitude: 114.128955,
    zoom: 17
  })

  const toggleMarkerPopup = (index, showPopup) => {
    setStores(produce(stores, (draft) => {
      draft[index].showPopup = showPopup
    }))
  }

  const goToStore = (latitude, longitude) => {
    setViewport({
      ...viewport,
      latitude,
      longitude,
      zoom: 17,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic
    })
  }

  const showMapAccordion = stores.map((store, index) => (
    <Accordion
      id="storeAccordion"
      elevation="5"
      expanded={store.showPopup}
      onClick={() => {
        goToStore(store.latitude, store.longitude)
        toggleMarkerPopup(index, !store.showPopup)
      }}
      sx={{ mx: 'auto' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="h6">{store.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="subtitle1">
          {t('address')} {store.address}
        </Typography>
        <Typography variant="subtitle1">
          {t('telephone')} {store.telephone}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ))

  const markers = stores.map((store, index) => (
    <>
      <MapMarker
        key={store.name}
        latitude={store.latitude}
        longitude={store.longitude}
        offsetLeft={store.offsetLeft}
        offsetTop={store.offsetTop}
        onClick={() => {
          toggleMarkerPopup(index, true)
          goToStore(store.latitude, store.longitude)
        }}
      >
        <Image src="/assets/burgermarker.png" alt="store-map" width="50px" height="50px" />
      </MapMarker>

      {
        store.showPopup && (
        <MapPopup
          latitude={store.latitude}
          longitude={store.longitude}
          offsetLeft={store.offsetLeft + 30}
          offsetTop={store.offsetTop}
          closeButton
          closeOnClick={false}
          onClose={() => toggleMarkerPopup(index, false)}
          anchor="bottom"
          maxWidth="100px"
        >
          <Box>{store.name}</Box>
          <Box>{store.address}</Box>
        </MapPopup>
        )
      }
    </>
  ))

  // const mobileTheme = useTheme()

  // const isMobile = useMediaQuery(mobileTheme.breakpoints.down('md'))

  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - {t('storeLocator')}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <Box id="pages-storelocator" sx={{ mb: 3 }}>
        <Typography align="center" variant="h4" sx={{ m: 3 }}>{t('storeLocator')} </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4} order={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box sx={{ width: '95%', mx: 1 }}>
              {showMapAccordion}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8} order={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
            <Box sx={{ ml: 2, p: 0 }}>
              <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/outdoors-v11"
                mapboxApiAccessToken="pk.eyJ1IjoiODUyam9uYXRoYW4iLCJhIjoiY2t3ZGQxYm9pMGl2MTJvbnQyM2I3YmgzZiJ9.Yn1EZWilP6oJ7pcGrcDAaw"
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
              >
                <NavigationControl style={navControlStyle} />
                {markers}
              </ReactMapGL>
            </Box>
          </Grid>
          {/* </Box> */}
        </Grid>
      </Box>

    </CompsLayout>
  )
}
