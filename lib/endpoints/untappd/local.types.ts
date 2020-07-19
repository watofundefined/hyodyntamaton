import { DistPref, UtCheckin } from './shared.types'

export interface UtLocalRequest {
  access_token: string
  lat: number
  lng: number
  max_id?: number
  min_id?: number
  limit?: number
  radius?: number
  dist_pref?: DistPref
}

export interface UtLocalResponse {
  response: UtLocalData
  meta: {
    code: number
    response_time: {
      time: number
      measure: 'seconds'
    }
    init_time: {
      time: number
      measure: 'seconds'
    }
  }
  notifications: {
    type: 'notifications'
    unread_count: {
      comments: number
      toasts: number
      friends: number
      messages: number
      venues: number
      veunes: number
      others: number
      news: number
    }
  }
}

export interface UtLocalData {
  radius: number
  dist_pref: DistPref
  limit: number
  offset: number
  type: string
  checkins: {
    count: number
    items: UtCheckin[]
  }
  pagination: {
    max_id: number
    next_url: string
    since_url: string
  }
}
