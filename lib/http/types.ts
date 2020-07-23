// eslint-disable-next-line no-restricted-syntax
import { AxiosRequestConfig, AxiosResponse, AxiosInterceptorManager } from 'axios'

export interface ApiReqConfig<TParams> extends AxiosRequestConfig {
  params?: TParams
}

export type Result<TData, TError = null> =
  | { status: number; error: null; data: TData }
  | { status: number; error: TError; data: null }

export type ApiError = { code: string; message: string }

export type ApiResult<TData> = Promise<Result<TData, ApiError>>

// Subset of AxiosInstance - expose only what's needed
export interface ApiClient {
  get<TReq, TData>(url: string, config?: ApiReqConfig<TReq>): ApiResult<TData>
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse>
  }
}
