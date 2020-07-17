import { bodyWidth, mainHeight } from 'lib/client/dimensions'
import { GeoLocation } from 'lib/types'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import {
  GoogleMapInstance,
  GoogleMapProps,
  WindowWithGoogleStuff,
  MarkerInstance,
} from './google-map.types'

let map: GoogleMapInstance

declare let window: WindowWithGoogleStuff

export default function GoogleMap({ location, venues }: GoogleMapProps): JSX.Element {
  const [scriptState, setScriptState] = useState({
    loaded: isScriptAdded(),
  })
  // Keep reference to the DOM instance, won't work with useState
  const mapRef = useRef<GoogleMapInstance>(null)
  const venueMarkers = useRef<MarkerInstance[]>([])

  useEffect(() => {
    window.onMapInit = function onMapInit() {
      const map = initMap(location)
      setScriptState({ loaded: true })

      mapRef.current = map
    }

    if (scriptState.loaded) {
      const map = initMap(location)
      setScriptState({ loaded: true })
      mapRef.current = map
    }
  }, [])

  useEffect(() => {
    const anyNewVenues = venues && venues.length
    const markersToRemain = []

    for (const vm of venueMarkers.current) {
      if (!anyNewVenues || !venues.some((v) => v.venue_id == vm.id)) {
        vm.setMap(null)
      } else {
        markersToRemain.push(vm)
      }
    }

    venueMarkers.current = markersToRemain

    if (mapRef.current && anyNewVenues) {
      venues.forEach((v) => {
        const marker = addMarker({
          map: mapRef.current,
          location: v.location,
          name: v.venue_name,
        })
        marker.id = v.venue_id
        venueMarkers.current.push(marker)
      })
    }
  }, [venues])

  return (
    <>
      {!scriptState.loaded && (
        <Head>
          <script async defer src={scriptUrl()}></script>
        </Head>
      )}
      <div className="gmap-container"></div>
    </>
  )
}

function initMap(location: GeoLocation): GoogleMapInstance {
  const container = document.getElementsByClassName('gmap-container')[0] as HTMLElement

  map = new window.google.maps.Map(container, {
    center: location,
    // 1: World , 5: Continent , 10: City , 15: Streets , 20: Buildings
    zoom: 15,
    styles: getMapStyles(),
    disableDefaultUI: true,
    zoomControl: true,
  })

  // FIXME style properly - remove magic numbers
  container.style.height = '' + (mainHeight() - 250) + 'px'
  container.style.width = '' + Math.min(bodyWidth() - 50, 800) + 'px'

  return map
}

interface VenueMarker {
  map: GoogleMapInstance
  location: GeoLocation
  name: string
}

function addMarker({ map, location, name }: VenueMarker): MarkerInstance {
  // https://developers.google.com/maps/documentation/javascript/markers
  const { lat, lng } = location

  const marker = new window.google.maps.Marker({
    map: map,
    position: { lat, lng },
    label: name,
    animation: window.google.maps.Animation.DROP,
  })

  return marker
}

function getMapStyles() {
  // https://developers.google.com/maps/documentation/javascript/style-reference
  return [
    { elementType: 'labels.text', stylers: [{ visibility: 'off' }] },
    {
      featureType: 'all', // 'all' | 'landscape' | 'road.arterial' | ...
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }],
    },
  ]
}

function isScriptAdded(): boolean {
  return (
    Array.from(document.head.children).filter(
      ({ src }: any) => src && src.startsWith('https://maps.googleapis.com/maps')
    ).length > 0
  )
}

function scriptUrl(): string {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
  return `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=onMapInit`
}
