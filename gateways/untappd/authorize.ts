import { client, ApiResult } from 'lib/http'

export interface AuthRequest {
  code: string
  response_type: string
  client_id: string
  client_secret: string
  redirect_url: string
}

export interface AuthResponse {
  response: { access_token: string }
}

export const url = 'https://untappd.com/oauth/authorize/'

export function authorize(params: AuthRequest): ApiResult<AuthResponse> {
  return client.get<AuthRequest, AuthResponse>(url, { params })
}
