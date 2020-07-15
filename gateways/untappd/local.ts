import { ApiResult, client } from 'lib/http'
import { LocalRequest, LocalResponse } from './local.types'

export const url = process.env.NEXT_PUBLIC_UNTAPPD_API_URL + '/v4/thepub/local'

export function local(params: LocalRequest): ApiResult<LocalResponse> {
  return client.get<LocalRequest, LocalResponse>(url, { params })
}
