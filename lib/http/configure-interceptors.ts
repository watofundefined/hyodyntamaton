import { ApiError, ApiClient } from './types'

interface InterceptResult {
  status: number
  data?: any
  error?: {
    message: string
    code: string
  }
}

export default function configureInterceptors(client: ApiClient): void {
  // Transform data/errors to get a consistent API
  // - onSuccess cb just throws away metadata
  // - onError doesn't return Promise.reject, which means that even http errors
  //   will flow through the first (success) cb on the consumer side
  //   (i.e. get(url).then((dataOrError) => /* ... */))
  client.interceptors.response.use(
    // Casting to any - Axios will be used wrapped, typings are different
    handleSuccess as any, // 2xx
    handleError as any // >= 3xx
  )
}

function handleSuccess(res): InterceptResult {
  // Untappd API (at least Auth endpoint) returns status 200 even for errors.
  // The real error info is in res.data.meta
  if (res.config.url && res.config.url.startsWith('https://untappd.com/')) {
    try {
      const isActuallyError = Number(res.data.meta.http_code) >= 300
      if (isActuallyError) {
        return {
          status: res.data.meta.http_code,
          error: {
            code: res.data.meta.error_type,
            message: res.data.meta.error_detail,
          },
        }
      }
    } catch (_) {
      // Just accessing properties unsafely. If there's no such data, it's probably ok.
    }
  }

  return {
    status: res.status,
    data: res.data,
  } as any
}

function handleError(err): InterceptResult {
  let parsed: Partial<ApiError> = {}

  // Hyodyntamaton API will always return errors inside the data object
  // Try to get the details from there, fallback to generic status and statusText
  // FIXME: Find out if data ever comes back as string,
  // when I was using own instance of server it did. Remove if it's not required
  if (err.response.data) {
    try {
      parsed =
        typeof err.response.data == 'string'
          ? JSON.parse(err.response.data).error
          : err.response.data.error
      parsed = parsed || {}
    } catch (_) {
      /* it's ok */
    }
  }

  return {
    status: err.response.status,
    error: {
      message: parsed.message || err.response.statusText,
      code: parsed.code || err.response.status.toString(),
    },
  }
}
