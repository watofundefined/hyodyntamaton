export type DistPref = 'm' | 'km'

export type BinaryBoolean = 0 | 1

// FIXME - fill in
export type UntappdComment = any

export interface UntappdMedia {
  photo_id: number
  photo: {
    photo_img_sm: string
    photo_img_md: string
    photo_img_lg: string
    photo_img_og: string
  }
}

export interface UntappdToast {
  uid: number // this uid and the user.uid below are same
  user: Partial<UntappdUser> & {
    account_type: 'user'
    venue_details: []
    brewery_details: []
  }
  like_id: number
  like_owner: boolean
  created_at: string
}

export interface UntappdUser {
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

export interface UntappdBeer {
  bid: number
  beer_name: string
  beer_label: string
  beer_label_hd: string
  beer_style: string
  beer_abv: number
  has_had: boolean
  auth_rating?: number
  wish_list?: false
  beer_active: BinaryBoolean
}

export interface UntappdBrewery {
  brewery_id: number
  brewery_name: string
  brewery_slug: string
  brewery_page_url: string
  brewery_type: string
  brewery_label: string
  country_name: string
  contact: {
    twitter: string
    facebook: string
    instagram: string
    url: string
  }
  location: {
    brewery_city: string
    brewery_state: string
    lat: number
    lng: number
  }
  brewery_active: BinaryBoolean
}

export interface UntappdVenueCategory {
  category_key: string
  category_name: string
  category_id: string
  is_primary: boolean
}

export interface UntappdVenue {
  venue_id: number
  venue_name: string
  venue_slug: string
  primary_category_key: string
  primary_category: string
  parent_category_id: string
  is_verified: boolean
  categories: {
    count: number
    items: UntappdVenueCategory[]
  }
  location: {
    venue_address: string
    venue_city: string
    venue_state: string
    venue_country: string
    lat: number
    lng: number
  }
  contact: {
    twitter: string
    venue_url: string
  }
  foursquare: {
    foursquare_id: string
    foursquare_url: string
  }
  venue_icon: {
    sm: string
    md: string
    lg: string
  }
}

export interface UntappdBadge {
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

export interface UntappdCheckin {
  checkin_id: number
  distance?: number
  // UTC0 "Wed, 15 Jul 2020 09:42:28 +0000"
  created_at: string
  checkin_comment: string
  rating_score: number
  user: UntappdUser
  beer: UntappdBeer
  brewery: UntappdBrewery
  venue: UntappdVenue
  comments: {
    total_count: number
    count: number
    items: UntappdComment[]
  }
  toasts: {
    total_count: number
    count: number
    auth_toast: boolean
    items: UntappdToast[]
  }
  media: {
    count: number
    items: UntappdMedia[]
  }
  source: {
    app_name: string
    app_website: string
  }
  badges: {
    retro_status?: boolean
    count: number
    items: UntappdBadge[]
  }
}
