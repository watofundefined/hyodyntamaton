import { ApiError } from 'lib/http'
import { Venue } from 'lib/types'

export interface VenuesSearchRequest {
  lat: number
  lng: number
  radius: number
}

export interface VenuesSearchResponse {
  venues?: Venue[]
  error?: ApiError
}
