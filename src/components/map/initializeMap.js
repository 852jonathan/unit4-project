export function initializeMap(mapboxgl, map) {
  map.on('click', 'data', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['data']
    })
    const clusterId = features[0].properties.cluster_id
    map
      .getSource('dcmusic.live')
      .getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return
        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom
        })
      })
  })

  map.on('click', 'unclustered-point', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice()
    const { mag } = e.features[0].properties
    let tsunami
    if (e.features[0].properties.tsunami === 1) {
      tsunami = 'yes'
    } else {
      tsunami = 'no'
    }
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
    }
    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(`magnitude: ${mag}<br>Was there a tsunami?: ${tsunami}`)
      .addTo(map)
  })
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
  )

  map.on('mouseenter', 'data', () => {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'data', () => {
    map.getCanvas().style.cursor = ''
  })
}
