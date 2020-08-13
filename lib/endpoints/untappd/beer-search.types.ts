import { UtReq, UtResMeta, UtNotifications, BinaryBoolean } from './shared.types'
import { CancelToken } from 'axios'

export type UtBeerSearchRequest = UtReq<{
  q: string
  offset?: number
  limit?: number
  sort?: 'checkin' | 'name'
}>

export interface BeerSearchConfig {
  params: UtBeerSearchRequest
  cancelToken: CancelToken
}

export interface UtBeerSearchResponse {
  meta: UtResMeta
  notifications: UtNotifications
  response: {
    message: ''
    time_taken: number
    brewery_id: number
    search_type: ''
    type_id: number
    search_version: number
    found: number
    offset: number
    limit: number
    term: string
    parsed_term: string
    beers: {
      count: number
      items: UtBeerSearchResponseBeer[]
    }
    homebrew: { count: number; items: UtBeerSearchResponseBeer[] }
    breweries: { count: number; items: any[] }
  }
}

export interface UtBeerSearchResponseBeer {
  checkin_count: number
  have_had: false
  your_count: number
  beer: {
    bid: number
    beer_name: string
    beer_label: string
    beer_abv: number
    beer_slug: string
    beer_ibu: number
    beer_description: string
    created_at: string
    beer_style: string
    in_production: BinaryBoolean
    auth_rating: number
    wish_list: false
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
    brewery_active: BinaryBoolean
  }
}
