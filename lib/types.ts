import { FsVenueCategory } from './endpoints/foursquare/venues-search.types'
import { UtVenueInfoCheckin } from './endpoints/untappd/venue-info.types'

export type QueryDict<T> = { [key in keyof T]: string | string[] }

export type Dictionary<T> = { [key: string]: T } | { [key: number]: T }

export interface GeoLocation {
  lat: number
  lng: number
}

export interface Venue {
  ids: VenueIds
  name: string
  url: string
  location: GeoLocation
  categories: FsVenueCategory[]
  checkins: UtVenueInfoCheckin[]
}

export interface VenueIds {
  foursquareId: string
  untappedId?: number
}
