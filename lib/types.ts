export type QueryDict<T> = { [key in keyof T]: string | string[] }

export interface GeoLocation {
  lat: number
  lng: number
}

export type VenueCategory =
  | 'beer-bar'
  | 'beer-garden'
  | 'beer-shop'
  | 'brewery'
  | 'cidery'
  | 'other'
