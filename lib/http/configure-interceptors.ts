import { ApiError, ApiClient } from './types'

export default function configureInterceptors(client: ApiClient) {
  // Transform data/errors to get a consistent API
  // - onSuccess cb just throws away metadata
  // - onError doesn't return Promise.reject, which means that even http errors
  //   will flow through the first (success) cb on the consumer side
  //   (i.e. get(url).then((dataOrError) => /* ... */))
  client.interceptors.response.use(
    // called when status is 2xx
    (res) => {
      return {
        status: res.status,
        data: res.data,
      } as any
    },
    // called when status is >= 3xx
    (err) => {
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
        } catch(_) {/* it's ok */}
      }

      return {
        status: err.response.status,
        error: {
          message: parsed.message || err.response.statusText,
          code: parsed.code || err.response.status.toString(),
        },
      }
    }
  )
}
