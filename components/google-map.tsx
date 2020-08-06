import { bodyWidth, mainHeight, pageHeights, rootDimensions } from 'lib/client/dimensions'
import { GeoLocation, Venue } from 'lib/types'
import Head from 'next/head'
import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import Modal, { Styles } from 'react-modal'
import { useSelector } from 'react-redux'
import { AppState } from 'state'
import {
  GoogleMapInstance,
  GoogleMapProps,
  MarkerInstance,
  WindowWithGoogleStuff,
} from './google-map.types'
import VenueDetails from './venue-details'

let map: GoogleMapInstance

declare let window: WindowWithGoogleStuff

// https://developers.google.com/maps/documentation/javascript/

export default function GoogleMap({ location }: GoogleMapProps): JSX.Element {
  const [scriptLoaded, setScriptLoaded] = useState(isScriptAdded())
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [modalStyles, setModalStyles] = useState(getInitialModalStyles())
  const [venue, setVenue] = useState<Venue>(null)
  const venues = useSelector<AppState, Venue[]>((state) => state.venues.items)

  const mapRef = useRef<GoogleMapInstance>(null)
  const venueMarkers = useRef<MarkerInstance[]>([])

  const addMarkers = useCallback((venues: Venue[]) => {
    return venues.map((v) => addMarker(mapRef.current, v, onMarkerClicked))
  }, [])

  const updateMarkers = useCallback(
    (venues: Venue[]) => {
      const markersToRemain: MarkerInstance[] = []

      for (const vm of venueMarkers.current) {
        const removeMarker =
          !venues.length || !venues.some((v) => v.ids.foursquareId == vm.id)

        if (removeMarker) vm.setMap(null)
        else markersToRemain.push(vm)
      }

      venueMarkers.current = markersToRemain

      const markerIds = markersToRemain.map((m) => m.id)
      const newVenues = venues.filter((v) => !markerIds.includes(v.ids.foursquareId))

      if (newVenues.length) {
        const newMarkers = addMarkers(newVenues)
        venueMarkers.current = [...venueMarkers.current, ...newMarkers]
      }
    },
    [addMarkers]
  )

  useEffect(() => {
    if (scriptLoaded) initMap(mapRef, location)
    else {
      window.onMapInit = () => {
        initMap(mapRef, location)
        setScriptLoaded(true)
        updateModalStyles()
        if (venues) addMarkers(venues)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => mapRef.current && updateMarkers(venues), [updateMarkers, venues])

  useEffect(() => {
    window.addEventListener('resize', updateModalStyles)
    return () => window.removeEventListener('resize', updateModalStyles)
  }, [])

  function updateModalStyles() {
    const { top, left, width, height } = rootDimensions()
    const { footer } = pageHeights()

    document.documentElement.style.setProperty('--pub-details-modal-width', width + 'px')

    setModalStyles(({ content, overlay }) => ({
      overlay,
      content: { ...content, top, left, width, height: height - footer },
    }))
  }

  function onMarkerClicked(venue: Venue) {
    setIsModalOpened(true)
    setVenue(venue)
  }

  return (
    <>
      {/* Load the script only once */}
      {!scriptLoaded && (
        <Head>
          <script async defer src={scriptUrl()}></script>
        </Head>
      )}
      <div className="gmap-container"></div>
      <Modal
        isOpen={isModalOpened}
        closeTimeoutMS={500}
        style={modalStyles}
        contentLabel="Pub deatails"
        onRequestClose={() => setIsModalOpened(false)}
        ariaHideApp={false}
      >
        {/* Wrapper needs to be in the DOM so that the first slide-in animation works */}
        <div className="pub-details-modal">
          {venue && <VenueDetails venueFsId={venue.ids.foursquareId} />}
          <div className="pub-details-close-button-container">
            <button className="btn close-modal" onClick={() => setIsModalOpened(false)}>
              X
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

function initMap(
  mapRef: MutableRefObject<GoogleMapInstance>,
  location: GeoLocation
): void {
  const container = document.querySelector('.gmap-container') as HTMLElement

  map = new window.google.maps.Map(container, {
    center: location,
    // 1: World , 5: Continent , 10: City , 15: Streets , 20: Buildings
    zoom: 15,
    styles: getMapStyles(),
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling: 'greedy',
  })

  container.style.height = '' + mainHeight() + 'px'
  container.style.width = '' + Math.min(bodyWidth() - 50, 800) + 'px'

  mapRef.current = map
}

function addMarker(
  map: GoogleMapInstance,
  venue: Venue,
  onClick: (v: Venue) => void
): MarkerInstance {
  const marker = new window.google.maps.Marker({
    map: map,
    position: venue.location,
    label: venue.name,
    animation: window.google.maps.Animation.DROP,
  })
  marker.id = venue.ids.foursquareId
  marker.addListener('click', () => onClick(venue))

  return marker
}

function getMapStyles() {
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

function getInitialModalStyles(): Styles {
  return {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
    content: {
      pointerEvents: 'initial',
      overflowX: 'hidden',
      backgroundColor: 'transparent',
      position: 'absolute',
      padding: 0,
    },
  }
}
