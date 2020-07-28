import { ApiResult, client } from 'lib/http'
import { UtReq } from './shared.types'
import { UtBeerInfoResponse } from './beer-info.types'

export const url = process.env.NEXT_PUBLIC_UNTAPPD_API_URL + '/v4/beer/info/'

export function beerInfo(id: number, params: UtReq<{}>): ApiResult<UtBeerInfoResponse> {
  return client.get<UtReq<{}>, UtBeerInfoResponse>(url + id, { params })
}
