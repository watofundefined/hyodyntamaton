// eslint-disable-next-line no-restricted-syntax
import axios from 'axios'
import configureInterceptors from './configure-interceptors'
import { ApiClient } from './types'

const client: ApiClient = axios.create()
configureInterceptors(client)

export * from './types'
export { client }
export { axios as rawClient }
export type { AxiosError } from 'axios'
