import { GeoLocation } from 'lib/types'
import {
  GeoLocationResult,
  GeoLocationError,
  GeolocationPositionErrorType,
} from './user-location.types'

export default function userLocation(): Promise<GeoLocationResult> {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        resolve({
          status: 'success',
          location: toLatLng(pos),
        }),
      (err: GeoLocationError) => resolve({ status: codeToStatus(err.code) }),
      { maximumAge: 2 * 60 * 1000 }
    )
  })
}

function toLatLng(pos: Position): GeoLocation {
  return {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude,
  }
}

function codeToStatus(errorType: GeolocationPositionErrorType): LocationStatus {
  switch (errorType) {
    case GeolocationPositionErrorType.PERMISSION_DENIED:
      return 'denied'
    case GeolocationPositionErrorType.POSITION_UNAVAILABLE:
      return 'unavailable'
    default:
      return 'timeout'
  }
}
