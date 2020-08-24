import { ApiResult, customClient } from 'lib/http'
import qs from 'qs'
import { GoogleDetectRequest, GoogleDetectResult } from './detect.types'

// Google Translation API expects '...?q=blah&q=blah2',
// Axios defaults to '...?q[]=blah&q[]=blah'
const httpClient = customClient({
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
})

export const url = 'https://translation.googleapis.com/language/translate/v2/detect'

export function detect(texts: string[]): ApiResult<GoogleDetectResult> {
  return httpClient.get<GoogleDetectRequest, GoogleDetectResult>(url, {
    params: { q: texts, key: process.env.GOOGLE_TRANSLATE_KEY },
  })
}
