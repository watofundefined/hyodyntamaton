import { rest } from 'msw'
import qs from 'qs'
import { url } from './translate'
import { GoogleTranslateResult } from './translate.types'

export default rest.get(url, (req, res, ctx) => {
  const texts = qs.parse(req.url.search.slice(1)).q as string | string[]
  return res(ctx.delay(100), ctx.status(200), ctx.json(getMockedData(texts || [])))
})

function getMockedData(texts: string | string[]): GoogleTranslateResult {
  if (typeof texts == 'string') texts = [texts]

  return {
    data: {
      translations: texts.map((t) => ({
        detectedSourceLanguage: 'en',
        translatedText: t,
      })),
    },
  }
}
