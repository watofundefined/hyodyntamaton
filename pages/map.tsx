import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import { local } from 'gateways/untappd/local'
import { useState, useEffect } from 'react'
import { AppState, UserState } from '../state'
import GoogleMap from 'components/google-map'
import userLocation from 'lib/client/user-location'
import { GeoLocation } from 'lib/types'
import { UntappdVenue } from 'gateways/untappd/shared.types'
import unique from 'lib/unique'

function Map(): JSX.Element {
  const router = useRouter()
  const { token } = useSelector<AppState, UserState>((state) => state.user)
  const [location, setLocation] = useState<GeoLocation>()
  const [venues, setVenues] = useState([])

  useEffect(() => {
    userLocation().then((res) => {
      setLocation(res.status == 'success' ? res.location : defaultLocation())
    })
  }, [])

  useEffect(() => {
    if (!location || !token) return

    local({ access_token: token, radius: 1, dist_pref: 'km', ...location }).then(
      (res) => {
        if (!res.error) {
          setVenues(
            res.data.response.checkins.items
              .map((c) => c.venue)
              .filter(unique<UntappdVenue>('venue_id'))
          )
        }
      }
    )
  }, [location, token])

  return (
    <>
      <Head>
        <title>Hyödyntämätön | Pubs Nearby</title>
      </Head>
      <div className="container stack">
        <h1>Map</h1>
        {location && <GoogleMap location={location} venues={venues} />}
        <button className="btn" onClick={() => router.push('/')}>
          Back to menu
        </button>
      </div>
    </>
  )
}

function defaultLocation(): GeoLocation {
  // Lauttasaari
  // return { lat: 60.148806, lng: 24.886443 }
  // Center-ish
  return { lat: 60.192059, lng: 24.945831 }
}

export default dynamic(() => Promise.resolve(Map), { ssr: false })
