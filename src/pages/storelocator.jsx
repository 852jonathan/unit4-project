import Head from 'next/head'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
// import { addDataLayer } from '../map/addDataLayer'
// import { initializeMap } from '../map/initializeMap'
import { fetcher } from '@/_services/fetcher'

import CompsLayout from '@/components/layouts/Layout'

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

export default function PagesStoreLocator() {
  const [pageIsMounted, setPageIsMounted] = useState(false)
  const [Map, setMap] = useState()
  const { data, error } = useSWR('/api/liveMusic', fetcher)

  if (error) {
    console.error(error)
  }

  mapboxgl.accessToken = 'pk.eyJ1IjoiODUyam9uYXRoYW4iLCJhIjoiY2t3NXV1dWxoMGZ3ZTJxbzhmZmVmem5zNSJ9.Zwi64V9tQ2hj0CLUn2ajJA'

  useEffect(() => {
    setPageIsMounted(true)

    const map = new mapboxgl.Map({
      container: 'my-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.02, 38.887],
      zoom: 12.5,
      pitch: 45,
      maxBounds: [
        [-77.875588, 38.50705], // Southwest coordinates
        [-76.15381, 39.548764] // Northeast coordinates
      ]
    })

    initializeMap(mapboxgl, map)
    setMap(map)
  }, [])

  useEffect(() => {
    if (pageIsMounted && data) {
      Map.on('load', () => {
        addDataLayer(Map, data)
      })
    }
  }, [pageIsMounted, setMap, data, Map])
  return (
    <CompsLayout>
      <Head>
        <title>MahaBurger - Store Locator</title>
        <link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <div id="pages-storelocator">
        <h1>Store Locator</h1>
        <main>
          <div id="my-map" style={{ height: 500, width: 500 }} />
        </main>
      </div>
    </CompsLayout>
  )
}
