import { ApiResult, client } from 'lib/http'
import baseUrl from './base-url'
import {
  UtBeerSearchRequest,
  UtBeerSearchResponse,
  BeerSearchConfig,
} from './beer-search.types'

export const url = baseUrl + '/v4/search/beer'

export function beerSearch(config: BeerSearchConfig): ApiResult<UtBeerSearchResponse> {
  return client.get<UtBeerSearchRequest, UtBeerSearchResponse>(url, config)
}
