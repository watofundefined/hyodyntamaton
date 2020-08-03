import { ApiResult, client } from 'lib/http'
import { UtReq } from './shared.types'
import { UtVenueInfoResponse } from './venue-info.types'

export const url = process.env.NEXT_PUBLIC_UNTAPPD_API_URL + '/v4/venue/info/'

export function venueInfo(id: number, params: UtReq<{}>): ApiResult<UtVenueInfoResponse> {
  return client.get<UtReq<{}>, UtVenueInfoResponse>(url + id, { params })
}
