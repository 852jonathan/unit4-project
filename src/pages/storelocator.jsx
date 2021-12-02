import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'
import ReactMapGL, { Marker as MapMarker, Popup as MapPopup, NavigationControl, FlyToInterpolator } from 'react-map-gl'
import produce from 'immer'
import { easeCubic } from 'd3-ease'

import CompsLayout from '@/components/layouts/Layout'

const navControlStyle = {
  right: 10,
  top: 10
}

export default function PagesStoreLocator() {
  const [stores, setStores] = useState([
    {
      id: 1,
      name: 'MahaBurger - Main Store',
      address: '8/F, Cheung Hing Industrial Building, Kennedy Town',
      telephone: '2123 4567',
      latitude: 22.280806027643074,
      longitude: 114.12911830826918,
      offsetLeft: -10,
      offsetTop: -50,
      showPopup: false
    }, {
      id: 2,
      name: 'MahaBurger - 2nd Kennedy Town Store',
      address: 'G/F, 31 Rock Hill St, Kennedy Town',
      telephone: '2987 6543',
      latitude: 22.28211,
      longitude: 114.1285920,
      offsetLeft: 0,
      offsetTop: -50,
      showPopup: false
    }, {
      id: 3,
      name: 'MahaBurger - Causeway Bay Store',
      address: 'G/F, 36 Jardine\'s Bazaar, Causeway Bay',
      telephone: '2427 6423',
      latitude: 22.27939,
      longitude: 114.1855059,
      offsetLeft: 0,
      offsetTop: 0,
      showPopup: false
    }
  ])

  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
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
      className="storeAccordion"
      elevation="5"
      expanded={store.showPopup}
      onClick={() => {
        goToStore(store.latitude, store.longitude)
        toggleMarkerPopup(index, !store.showPopup)
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="h6">{store.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="subtitle1">
          Address: {store.address}
        </Typography>
        <Typography variant="subtitle1">
          Telephone: {store.telephone}
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

  return (
    <CompsLayout>
      <Head>
        <title>MahaBurger - Store Locator</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <div id="pages-storelocator">
        <Typography textAlign="center" variant="h4" sx={{ m: 3 }}>STORE LOCATOR </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: 500, mr: 1 }}>
            {showMapAccordion}
          </Box>

          <Box sx={{ width: 500 }}>
            <ReactMapGL
              {...viewport}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxApiAccessToken="pk.eyJ1IjoiODUyam9uYXRoYW4iLCJhIjoiY2t3ZGQxYm9pMGl2MTJvbnQyM2I3YmgzZiJ9.Yn1EZWilP6oJ7pcGrcDAaw"
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
              <NavigationControl style={navControlStyle} />
              {markers}
            </ReactMapGL>
          </Box>
        </Box>
      </div>
    </CompsLayout>
  )
}
