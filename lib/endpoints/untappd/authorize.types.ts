export interface UtAuthRequest {
  code: string
  response_type: string
  client_id: string
  client_secret: string
  redirect_url: string
}

export interface UtAuthResponse {
  response: { access_token: string }
}
