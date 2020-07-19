import { ApiResult, client } from 'lib/http'
import { UtAuthRequest, UtAuthResponse } from './authorize.types'

export const url = 'https://untappd.com/oauth/authorize/'

export function utAuthorize(params: UtAuthRequest): ApiResult<UtAuthResponse> {
  return client.get<UtAuthRequest, UtAuthResponse>(url, { params })
}
