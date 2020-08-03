import { ApiResult, client } from 'lib/http'
import { UtReq } from './shared.types'
import { UtBeerInfoResponse } from './beer-info.types'
import baseUrl from './base-url'

export const url = baseUrl + '/v4/beer/info/'

export function beerInfo(id: number, params: UtReq<{}>): ApiResult<UtBeerInfoResponse> {
  return client.get<UtReq<{}>, UtBeerInfoResponse>(url + id, { params })
}
