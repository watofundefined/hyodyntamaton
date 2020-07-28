import { ApiResult, client } from 'lib/http'
import { UtVenueCheckinsRequest, UtVenueCheckinsResponse } from './venue-checkins.types'

export const url = process.env.NEXT_PUBLIC_UNTAPPD_API_URL + '/v4/venue/checkins/'

export function venueCheckins(
  id: number,
  params: UtVenueCheckinsRequest
): ApiResult<UtVenueCheckinsResponse> {
  return client.get<UtVenueCheckinsRequest, UtVenueCheckinsResponse>(url + id, { params })
}
