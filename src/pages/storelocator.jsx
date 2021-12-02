import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'
import ReactMapGL, { Marker as MapMarker, Popup as MapPopup } from 'react-map-gl'
import produce from 'immer'

import CompsLayout from '@/components/layouts/Layout'

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
      name: 'MahaBurger - 2nd Store',
      address: 'G/F, 31 Rock Hill St, Kennedy Town',
      telephone: '2987 6543',
      latitude: 22.28211,
      longitude: 114.1285920,
      offsetLeft: 0,
      offsetTop: -50,
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

  const showMapAccordion = stores.map((store, index) => (
    <Accordion expanded={store.showPopup} onClick={() => toggleMarkerPopup(index, !store.showPopup)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{store.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Address: {store.address}
        </Typography>
        <Typography>
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
        onClick={() => toggleMarkerPopup(index, true)}
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
        <h1>Store Locator</h1>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: 500 }}>
            {showMapAccordion}
          </Box>

          <Box sx={{ width: 500, mx: 'auto' }}>
            <ReactMapGL
              {...viewport}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxApiAccessToken="pk.eyJ1IjoiODUyam9uYXRoYW4iLCJhIjoiY2t3ZGQxYm9pMGl2MTJvbnQyM2I3YmgzZiJ9.Yn1EZWilP6oJ7pcGrcDAaw"
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
              {markers}
            </ReactMapGL>
          </Box>
        </Box>
      </div>
    </CompsLayout>
  )
}
