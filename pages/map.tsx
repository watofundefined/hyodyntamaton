import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import GoogleMap from 'components/google-map'
import userLocation from 'lib/client/user-location'
import { GeoLocation } from 'lib/types'
import api from 'lib/api'
import { useDispatch } from 'react-redux'
import { VenuesActions } from 'state'

function Map(): JSX.Element {
  const router = useRouter()
  const [location, setLocation] = useState<GeoLocation>()
  const dispatch = useDispatch()

  useEffect(() => {
    // Center map around the mocked data
    if (
      process.env.NODE_ENV === 'development' &&
      process.env.NEXT_PUBLIC_API_MOCKING_ENABLED
    ) {
      setLocation(defaultLocation())
      return
    }

    userLocation().then((res) => {
      setLocation(res.status == 'success' ? res.location : defaultLocation())
    })
  }, [])

  useEffect(() => {
    if (!location) return

    api.venues
      .search({
        lat: location.lat,
        lng: location.lng,
        radius: 2000,
      })
      .then((res) => {
        if (res.data) {
          dispatch(VenuesActions.addVenues(res.data.venues))
        }
      })
  }, [location, dispatch])

  return (
    <>
      <Head>
        <title>Hyödyntämätön | Pubs Nearby</title>
      </Head>
      <header className="header">
        <h1>Map</h1>
      </header>
      <main className="stack">{location && <GoogleMap location={location} />}</main>
      <footer className="footer">
        <button className="btn" onClick={() => router.push('/')}>
          Back to menu
        </button>
      </footer>
    </>
  )
}

function defaultLocation(): GeoLocation {
  // Helsinki
  return { lat: 60.192059, lng: 24.945831 }
}

export default dynamic(() => Promise.resolve(Map), { ssr: false })
