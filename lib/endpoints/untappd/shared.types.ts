export type UtReq<T> = UtReqUserContext & T

export interface UtReqUserContext {
  access_token: string
}

export interface UtResMeta {
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

export interface UtNotifications {
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

export type DistPref = 'm' | 'km'

export type BinaryBoolean = 0 | 1

// FIXME - fill in
export type UtComment = any

export interface UtMedia {
  photo_id: number
  photo: {
    photo_img_sm: string
    photo_img_md: string
    photo_img_lg: string
    photo_img_og: string
  }
}

export interface UtToast {
  uid: number // this uid and the user.uid below are same
  user: Partial<UtUser> & {
    account_type: 'user'
    venue_details: []
    brewery_details: []
  }
  like_id: number
  like_owner: boolean
  created_at: string
}

export interface UtUser {
  uid: number
  user_name: string
  first_name: string
  last_name: string
  location: string
  is_supporter: BinaryBoolean
  url: string
  bio: string
  relationship: string
  user_avatar: string
  is_private: BinaryBoolean
  contact?: {
    foursquare: number
    twitter: string
    facebook: number
  }
}

export interface UtBeer {
  bid: number
  beer_name: string
  beer_label: string
  beer_label_hd?: string
  beer_style: string
  beer_abv: number
  has_had: boolean
  auth_rating?: number
  wish_list?: false
  beer_active: BinaryBoolean
}

export interface UtBrewery {
  brewery_id: number
  brewery_name: string
  brewery_slug: string
  brewery_page_url: string
  brewery_type?: string
  brewery_label: string
  country_name: string
  contact: {
    twitter?: string
    facebook?: string
    instagram?: string
    url?: string
  }
  location: {
    brewery_city: string
    brewery_state: string
    lat: number
    lng: number
  }
  brewery_active: BinaryBoolean
}

export interface UtVenueCategory {
  category_key: string
  category_name: string
  category_id: string
  is_primary: boolean
}

export interface UtVenue {
  venue_id: number
  venue_name: string
  venue_slug: string
  primary_category_key: string
  primary_category: string
  parent_category_id: string
  is_verified: boolean
  categories: {
    count: number
    items: UtVenueCategory[]
  }
  location: UtVenueLocation
  contact: UtVenueContact
  foursquare: UtVenueFoursquareDetails
  venue_icon: UtVenueIcon
}

export interface UtVenueFoursquareDetails {
  foursquare_id: string
  foursquare_url: string
}

export interface UtVenueContact {
  venue_url?: string
  twitter?: string
  facebook?: string
  yelp?: string
}

export interface UtVenueLocation {
  venue_address: string
  venue_city: string
  venue_state: string
  venue_country: string
  lat: number
  lng: number
}

export interface UtVenueIcon {
  sm: string
  md: string
  lg: string
}

export interface UtBadge {
  badge_id: number
  user_badge_id: number
  badge_name: string
  badge_description: string
  created_at: string
  badge_image: {
    sm: string
    md: string
    lg: string
  }
}

export interface UtCheckinComment {
  total_count: number
  count: number
  items: UtComment[]
}

export interface UtCheckinToasts {
  total_count: number
  count: number
  auth_toast: boolean
  items: UtToast[]
}

export interface UtCheckinMedia {
  count: number
  items: UtMedia[]
}

export interface UtCheckinBadges {
  retro_status?: boolean
  count: number
  items: UtBadge[]
}

export interface UtCheckin {
  checkin_id: number
  distance?: number
  // UTC0 "Wed, 15 Jul 2020 09:42:28 +0000"
  created_at: string
  checkin_comment: string
  rating_score: number
  user: UtUser
  beer: UtBeer
  brewery: UtBrewery
  venue: UtVenue
  comments: UtCheckinComment
  toasts: UtCheckinToasts
  media: UtCheckinMedia
  source: {
    app_name: string
    app_website: string
  }
  badges: UtCheckinBadges
}
