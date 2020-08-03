import { ApiResult, client } from 'lib/http'
import { UtVenueCheckinsRequest, UtVenueCheckinsResponse } from './venue-checkins.types'
import baseUrl from './base-url'

export const url = baseUrl + '/v4/venue/checkins/'

export function venueCheckins(
  id: number,
  params: UtVenueCheckinsRequest
): ApiResult<UtVenueCheckinsResponse> {
  return client.get<UtVenueCheckinsRequest, UtVenueCheckinsResponse>(url + id, { params })
}
