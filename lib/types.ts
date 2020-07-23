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
  categories: VenueCategory[]
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
