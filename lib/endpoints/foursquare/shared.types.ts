export type FsReq<T> = (FsReqUser & T) | (FsReqUserless & T)

export interface FsReqUser {
  oauth_token: string
}

export interface FsReqUserless {
  client_id: string
  client_secret: string
}

export interface FsResMeta {
  code: number
  requestId: string
}
