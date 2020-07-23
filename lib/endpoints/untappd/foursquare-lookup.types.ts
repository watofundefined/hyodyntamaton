import { UtNotifications, UtResMeta } from './shared.types'

export interface UtFoursquareLookupResponse {
  meta: UtResMeta
  notifications?: UtNotifications
  response: {
    venue: {
      count: number
      items: UtFoursquareLookupResponseItem[]
    }
  }
}

export interface UtFoursquareLookupResponseItem {
  venue_name: string
  venue_id: number
  foursquare_id: string
  last_updated: string
}
