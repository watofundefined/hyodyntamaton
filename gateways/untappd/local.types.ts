import { DistPref, UntappdCheckin } from './shared.types'

export interface LocalRequest {
  access_token: string
  lat: number
  lng: number
  max_id?: number
  min_id?: number
  limit?: number
  radius?: number
  dist_pref?: DistPref
}

export interface LocalResponse {
  response: LocalData
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

export interface LocalData {
  radius: number
  dist_pref: DistPref
  limit: number
  offset: number
  type: string
  checkins: {
    count: number
    items: UntappdCheckin[]
  }
  pagination: {
    max_id: number
    next_url: string
    since_url: string
  }
}
