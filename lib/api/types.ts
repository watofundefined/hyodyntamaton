import { ApiError } from 'lib/http'
import { GeoLocation, VenueCategory } from 'lib/types'

export interface VenuesSearchRequest {
  lat: number
  lng: number
  categories: VenueCategory[]
  radius: number
}

export interface VenuesSearchResponse {
  venues?: Venue[]
  error?: ApiError
}

export interface Venue {
  fsId: string
  name: string
  url: string
  location: GeoLocation
  categories: VenueCategory[]
}
