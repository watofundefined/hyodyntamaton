import { ApiError } from 'lib/http'
import { Venue, VenueCategory } from 'lib/types'

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
