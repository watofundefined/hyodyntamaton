import { ApiResult, client } from 'lib/http'
import { UtReq } from './shared.types'
import { UtVenueInfoResponse } from './venue-info.types'
import baseUrl from './base-url'

export const url = baseUrl + '/v4/venue/info/'

export function venueInfo(id: number, params: UtReq<{}>): ApiResult<UtVenueInfoResponse> {
  return client.get<UtReq<{}>, UtVenueInfoResponse>(url + id, { params })
}
