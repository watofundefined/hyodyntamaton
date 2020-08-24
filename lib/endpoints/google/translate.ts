import { ApiResult, customClient } from 'lib/http'
import qs from 'qs'
import { GoogleTranslateRequest, GoogleTranslateResult } from './translate.types'

// Google Translation API expects '...?q=blah&q=blah2',
// Axios defaults to '...?q[]=blah&q[]=blah'
const httpClient = customClient({
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
})

export const url = 'https://translation.googleapis.com/language/translate/v2'

export function translate(
  texts: string[],
  targetLanguageCode: string
): ApiResult<GoogleTranslateResult> {
  return httpClient.get<GoogleTranslateRequest, GoogleTranslateResult>(url, {
    params: {
      q: texts,
      target: targetLanguageCode,
      format: 'text',
      key: process.env.GOOGLE_TRANSLATE_KEY,
    },
  })
}
