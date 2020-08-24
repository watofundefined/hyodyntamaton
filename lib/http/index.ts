// eslint-disable-next-line no-restricted-syntax
import axios, { AxiosRequestConfig } from 'axios'
import configureInterceptors from './configure-interceptors'
import { ApiClient } from './types'

const client: ApiClient = axios.create()
configureInterceptors(client)

function customClient(config: AxiosRequestConfig): ApiClient {
  const res = axios.create(config)
  configureInterceptors(res)
  return res
}

export * from './types'
export { client, axios as rawClient, customClient }
export type { AxiosError } from 'axios'
