import {
  UtResMeta,
  UtNotifications,
  BinaryBoolean,
  UtVenueCategory,
  UtMedia,
} from './shared.types'

export interface UtBeerInfoResponse {
  meta: UtResMeta
  notifications?: UtNotifications
  response: {
    beer: {
      bid: number
      beer_name: string
      beer_label: string
      beer_label_hd: string
      beer_abv: number
      beer_ibu: number
      beer_description: string
      beer_style: string
      is_in_production: BinaryBoolean
      beer_slug: string
      is_homebrew: BinaryBoolean
      created_at: string
      rating_count: number
      rating_score: number
      stats: {
        total_count: number
        monthly_count: number
        total_user_count: number
        user_count: number
      }
      brewery: {
        brewery_id: number
        brewery_name: string
        brewery_slug: string
        brewery_type: string
        brewery_page_url: string
        brewery_label: string
        country_name: string
        contact: {
          twitter: string
          facebook: string
          url: string
        }
        location: {
          brewery_city: string
          brewery_state: string
          lat: number
          lng: number
        }
      }
      auth_rating: number
      wish_list: boolean
      media: {
        count: number
        items: UtBeerInfoMedia[]
      }
      checkins: {
        count: number
        items: UtBeerInfoCheckins[]
        pagination: {
          since_url: string
          next_url: string
          max_id: number
        }
      }
      similar: {
        method: string
        count: number
        items: UtBeerInfoSimilar[]
      }
      friends: {
        count: number
        items: any[]
      }
      weighted_rating_score: number
      beer_active: BinaryBoolean
      vintages: {
        count: number
        items: any[]
      }
      brewed_by: {
        count: number
        items: any[]
      }
    }
  }
}

export interface UtBeerInfoMedia {
  photo_id: number
  photo: {
    photo_img_sm: string
    photo_img_md: string
    photo_img_lg: string
    photo_img_og: string
  }
  created_at: string
  checkin_id: number
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
    auth_rating: number
    wish_list: boolean
  }
  brewery: {
    brewery_id: number
    brewery_name: string
    brewery_slug: string
    brewery_page_url: string
    brewery_label: string
    country_name: string
    contact: {
      twitter: string
      facebook: string
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
  user: {
    uid: number
    user_name: string
    first_name: string
    last_name: string
    user_avatar: string
    is_private: BinaryBoolean
  }
  venue: UtBeerInfoVenue[] | [[]] // ffs Untappd ;)
}

export interface UtBeerInfoSimilar {
  rating_score: number
  beer: {
    bid: number
    beer_name: string
    beer_abv: number
    beer_ibu: number
    beer_slug: string
    beer_style: string
    beer_label: string
    has_had: boolean
  }
  brewery: {
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
    brewery_active: number
  }
  friends: {
    items: any[]
    count: number
  }
}

export interface UtBeerInfoCheckins {
  checkin_id: number
  created_at: string
  checkin_comment: string
  rating_score: number
  user: {
    uid: number
    user_name: string
    first_name: string
    last_name: string
    location: string
    url: string
    is_supporter: BinaryBoolean
    bio: string
    relationship: string
    user_avatar: string
    is_private: BinaryBoolean
  }
  beer: {
    bid: number
    beer_name: string
    beer_label: string
    beer_abv: number
    beer_ibu: number
    beer_slug: string
    beer_description: string
    beer_style: string
    has_had: boolean
    beer_active: BinaryBoolean
  }
  brewery: {
    brewery_id: number
    brewery_name: string
    brewery_slug: string
    brewery_page_url: string
    brewery_label: string
    country_name: string
    contact: {
      twitter: string
      facebook: string
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
  venue: UtBeerInfoVenue | [] // ffs Untappd ;)
  comments: {
    total_count: number
    count: number
    items: any[]
  }
  toasts: {
    total_count: number
    count: number
    auth_toast: boolean
    items: any[]
  }
  media: {
    count: number
    items: UtMedia[]
  }
  source: {
    app_name: string
    app_website: string
  }
  badges: {
    retro_status?: boolean
    count: number
    items: any[]
  }
}

export interface UtBeerInfoVenue {
  venue_id: number
  venue_name: string
  venue_slug: string
  primary_category_key?: string
  primary_category: string
  parent_category_id: string
  categories: {
    count: number
    items: UtVenueCategory[]
  }
  location: {
    venue_address?: string
    venue_city?: string
    venue_state?: string
    venue_country?: string
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
  is_verified: BinaryBoolean | boolean
}
