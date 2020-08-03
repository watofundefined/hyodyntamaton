import { ApiResult, client } from 'lib/http'
import { UtLocalRequest, UtLocalResponse } from './local.types'
import baseUrl from './base-url'

export const url = baseUrl + '/v4/thepub/local'

export function local(params: UtLocalRequest): ApiResult<UtLocalResponse> {
  return client.get<UtLocalRequest, UtLocalResponse>(url, { params })
}
