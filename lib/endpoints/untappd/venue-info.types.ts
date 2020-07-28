import {
  UtNotifications,
  UtResMeta,
  UtVenueCategory,
  UtVenueIcon,
  UtVenueLocation,
  UtVenueContact,
  UtVenueFoursquareDetails,
  UtBrewery,
  BinaryBoolean,
  UtCheckinToasts,
  UtCheckinMedia,
  UtCheckinBadges,
} from './shared.types'

export interface UtVenueInfoResponse {
  meta: UtResMeta
  notifications: UtNotifications
  response: {
    venue: UtVenueInfo
  }
}

export interface UtVenueInfo {
  venue_id: number
  venue_name: string
  venue_slug: string
  last_updated: string
  primary_category: string
  categories: {
    count: number
    items: UtVenueCategory[]
  }
  stats: {
    total_count: number
    user_count: number
    total_user_count: number
    monthly_count: number
    weekly_count: number
  }
  venue_icon: UtVenueIcon
  public_venue: boolean
  location: UtVenueLocation
  contact: UtVenueContact
  foursquare: UtVenueFoursquareDetails
  media: {
    count: number
    items: UtVenueInfoMedia[]
  }
  checkins: {
    count: number
    items: UtVenueInfoCheckin[]
    pagination: {
      since_url: string
      next_url: string
      max_id: number
    }
  }
  top_beers: {
    offset: number
    limit: number
    count: number
    items: UtVenueInfoTopBeer[]
  }
  brewery_locations: {
    count: number
    items: any[]
  }
  is_verified: boolean
  is_closed: boolean
}

export interface UtVenueInfoCheckin {
  checkin_id: number
  created_at: string
  rating_score: number
  checkin_comment: string
  user: {
    uid: number
    user_name: string
    first_name: string
    last_name: string
    relationship: string
    is_supporter: BinaryBoolean
    user_avatar: string
    is_private: BinaryBoolean
  }
  beer: {
    bid: number
    beer_name: string
    beer_abv: number
    beer_label: string
    beer_slug: string
    beer_style: string
    beer_active: BinaryBoolean
    has_had: boolean
  }
  brewery: UtBrewery
  venue: {
    venue_id: number
    venue_name: string
    venue_slug: string
    primary_category_key: string
    primary_category: string
    parent_category_id: string
    categories: {
      count: number
      items: UtVenueCategory[]
    }
    location: UtVenueLocation
    contact: UtVenueContact
    foursquare: UtVenueFoursquareDetails
    venue_icon: UtVenueIcon
    is_verified: boolean
  }
  comments: {
    total_count: number
    count: number
    items: any[]
  }
  toasts: UtCheckinToasts
  media: UtCheckinMedia
  source: {
    app_name: string
    app_website: string
  }
  badges: UtCheckinBadges
}

export interface UtVenueInfoTopBeer {
  created_at: string
  total_count: number
  your_count: number
  beer: {
    bid: number
    beer_name: string
    beer_label: string
    beer_abv: number
    beer_ibu: number
    beer_slug: string
    beer_description: string
    is_in_production: BinaryBoolean
    beer_style_id: number
    beer_style: string
    rating_score: number
    rating_count: number
    count: number
    beer_active: BinaryBoolean
    on_list: boolean
    has_had: boolean
  }
  brewery: {
    brewery_id: number
    brewery_name: string
    brewery_slug: string
    brewery_page_url: string
    brewery_label: string
    country_name: string
    contact: {
      twitter?: string
      facebook?: string
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
  friends: {
    count: number
    items: any[]
  }
}

export interface UtVenueInfoMedia {
  photo_id: number
  photo: {
    photo_img_sm: string
    photo_img_md: string
    photo_img_lg: string
    photo_img_og: string
  }
  created_at: string
  checkin_id: number
  checkin_comment?: any
  beer: {
    bid: number
    beer_name: string
    beer_label: string
    beer_abv: number
    beer_ibu: number
    beer_slug: string
    beer_description: string
    is_in_production: BinaryBoolean
    beer_style_id: number
    beer_style: string
    rating_score: number
    rating_count: number
    count: number
    beer_active: BinaryBoolean
    on_list: boolean
    has_had: boolean
  }
  brewery: {
    brewery_id: number
    brewery_name: string
    brewery_slug: string
    brewery_page_url: string
    brewery_label: string
    country_name: string
    contact: {
      twitter?: string
      facebook?: string
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
  user: {
    uid: number
    user_name: string
    first_name: string
    last_name: string
    user_avatar: string
    is_private: BinaryBoolean
  }
  venue: {
    venue_id: number
    venue_name: string
    venue_slug: string
    primary_category_key: string
    primary_category: string
    parent_category_id: string
    categories: {
      count: number
      items: UtVenueCategory[]
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
      twitter?: string
      venue_url?: string
    }
    foursquare: UtVenueFoursquareDetails
    venue_icon: UtVenueIcon
    is_verified: boolean
  }
}
