import { FsVenueCategory } from './endpoints/foursquare/venues-search.types'

export type QueryDict<T> = { [key in keyof T]: string | string[] }

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
}

export interface VenueIds {
  foursquareId: string
  untappedId?: number
}

export type VenueCategory =
  | 'beer-bar'
  | 'beer-garden'
  | 'beer-shop'
  | 'brewery'
  | 'cidery'
  | 'other'

export interface Checkin {
  id: number
  createdAt: string
  rating: number
  comment: string
  userId: number
  beerId: number
}

export interface Beer {
  id: number
  breweryId: number
  name: string
  abv: number
  style: string
}

export interface BeerDetail {
  id: number
  ibu: number
  description: string
  rating: number
  numberOfRatings: number
}
