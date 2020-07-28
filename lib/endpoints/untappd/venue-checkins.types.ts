import { UtReq, UtResMeta, UtNotifications } from './shared.types'
import { UtVenueInfoCheckin } from './venue-info.types'

export type UtVenueCheckinsRequest = UtReq<{
  max_id?: number
  min_id?: number
  limit?: number // defaults to 25
}>

export interface UtVenueCheckinsResponse {
  meta: UtResMeta
  notifications?: UtNotifications
  response: {
    mem: false
    type: 'full' | string
    pagination: {
      since_url: string
      next_url: string
      max_id: number
    }
    checkins: {
      count: number
      items: UtVenueInfoCheckin[]
    }
  }
}
