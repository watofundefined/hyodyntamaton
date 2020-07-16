import { GeoLocation } from '../types'

export interface GeoLocationResult {
  status: LocationStatus
  location?: GeoLocation
}

export type LocationStatus = 'success' | 'denied' | 'unavailable' | 'timeout' | 'failed'

export interface GeoLocationError {
  code: GeolocationPositionErrorType
  message: string
}

export enum GeolocationPositionErrorType {
  PERMISSION_DENIED = 1,
  POSITION_UNAVAILABLE = 2,
  TIMEOUT = 3,
}
