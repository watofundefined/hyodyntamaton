import axios from 'axios'
import configureInterceptors from './configure-interceptors'
import { ApiClient } from './types'

const client: ApiClient = axios.create()
configureInterceptors(client)

export * from './types'
export { client }
