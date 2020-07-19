import { ApiResult, client } from 'lib/http'
import { UtLocalRequest, UtLocalResponse } from './local.types'

export const url = process.env.NEXT_PUBLIC_UNTAPPD_API_URL + '/v4/thepub/local'

export function local(params: UtLocalRequest): ApiResult<UtLocalResponse> {
  return client.get<UtLocalRequest, UtLocalResponse>(url, { params })
}
