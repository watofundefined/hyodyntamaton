import { bodyWidth, mainHeight } from 'lib/client/dimensions'
import { GeoLocation, Venue } from 'lib/types'
import Head from 'next/head'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import Modal, { Styles } from 'react-modal'
import { useSelector } from 'react-redux'
import { AppState, VenuesState } from 'state'
import {
  GoogleMapInstance,
  GoogleMapProps,
  MarkerInstance,
  WindowWithGoogleStuff,
} from './google-map.types'
import VenueDetails from './venue-details'

let map: GoogleMapInstance

declare let window: WindowWithGoogleStuff

export default function GoogleMap({ location }: GoogleMapProps): JSX.Element {
  const [scriptLoaded, setScriptLoaded] = useState(isScriptAdded())
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [modalStyles, setModalStyles] = useState(getInitialModalStyles())
  const [venue, setVenue] = useState<Venue>(null)
  const { items: venues } = useSelector<AppState, VenuesState>((state) => state.venues)

  const mapRef = useRef<GoogleMapInstance>(null)
  const venueMarkers = useRef<MarkerInstance[]>([])

  useEffect(() => {
    function onScriptLoaded() {
      initMap(mapRef, location)
      setScriptLoaded(true)
    }

    if (scriptLoaded) initMap(mapRef, location)
    else window.onMapInit = onScriptLoaded
  }, [location, scriptLoaded])

  useEffect(() => onVenuesChanged(venueMarkers, mapRef, venues, onMarkerClicked), [
    venues,
  ])

  useEffect(() => {
    function updateModalStyles() {
      const mapRect = document
        .getElementsByClassName('gmap-container')[0]
        .getBoundingClientRect()

      document.documentElement.style.setProperty(
        '--pub-details-modal-width',
        mapRect.width + 'px'
      )

      setModalStyles((oldStyles) => {
        return {
          ...oldStyles,
          content: {
            pointerEvents: 'initial',
            overflowX: 'hidden',
            backgroundColor: 'transparent',
            position: 'absolute',
            padding: 0,
            top: mapRect.top,
            left: mapRect.left,
            width: mapRect.width,
            height: mapRect.height,
          },
        }
      })
    }

    window.addEventListener('resize', updateModalStyles)

    if (scriptLoaded) updateModalStyles()

    return () => window.removeEventListener('resize', updateModalStyles)
  }, [scriptLoaded])

  function onMarkerClicked(v: Venue) {
    setIsModalOpened(true)
    setVenue(v)
  }

  function closeModal() {
    setIsModalOpened(false)
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
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        {/* Wrapper needs to be in the DOM so that the first slide-in works */}
        <div className="pub-details-modal">
          {venue && <VenueDetails venueFsId={venue.ids.foursquareId} />}
          <div className="pub-details-close-button-container">
            <button className="btn close-modal" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

function onVenuesChanged(
  markers: MutableRefObject<MarkerInstance[]>,
  map: MutableRefObject<GoogleMapInstance>,
  venues: Venue[],
  onMarkerClicked: (v: Venue) => void
): void {
  const anyNewVenues = venues && venues.length
  const markersToRemain = []

  for (const vm of markers.current) {
    if (!anyNewVenues || !venues.some((v) => v.ids.foursquareId == vm.id)) {
      vm.setMap(null)
    } else {
      markersToRemain.push(vm)
    }
  }

  markers.current = markersToRemain

  if (map.current && anyNewVenues) {
    venues.forEach((v) => {
      const marker = addMarker(map.current, v)
      marker.id = v.ids.foursquareId
      markers.current.push(marker)
      marker.addListener('click', () => onMarkerClicked(v))
    })
  }
}

function initMap(
  mapRef: MutableRefObject<GoogleMapInstance>,
  location: GeoLocation
): void {
  const container = document.getElementsByClassName('gmap-container')[0] as HTMLElement

  map = new window.google.maps.Map(container, {
    center: location,
    // 1: World , 5: Continent , 10: City , 15: Streets , 20: Buildings
    zoom: 15,
    styles: getMapStyles(),
    disableDefaultUI: true,
    zoomControl: true,
  })

  container.style.height = '' + mainHeight() + 'px'
  container.style.width = '' + Math.min(bodyWidth(), 800) + 'px'

  mapRef.current = map
}

function addMarker(map: GoogleMapInstance, venue: Venue): MarkerInstance {
  // https://developers.google.com/maps/documentation/javascript/markers
  const marker = new window.google.maps.Marker({
    map: map,
    position: venue.location,
    label: venue.name,
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

function getInitialModalStyles(): Styles {
  return {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
  }
}
