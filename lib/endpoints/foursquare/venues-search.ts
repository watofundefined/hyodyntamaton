import { ApiResult, client } from 'lib/http'
import { FsVenuesSearchReq, FsVenuesSearchRes } from './venues-search.types'

export const url = 'https://api.foursquare.com/v2/venues/search'

export function venuesSearch(r: FsVenuesSearchReq): ApiResult<FsVenuesSearchRes> {
  return client.get<FsVenuesSearchReq, FsVenuesSearchRes>(url, { params: r })
}
