import { NextApiRequest, NextApiResponse } from 'next'
import { detect, translate } from 'lib/endpoints'
import { mapCode } from 'lib/shared/languages'
import { ApiError } from 'lib/http'

export interface TranslateRequest {
  texts: string[]
  dontTranslateLanguages: string[]
  primaryLanguage: string
}

export interface TranslateResult {
  text: string
  sourceLanguage?: string
  original?: string
}

export interface TranslateResponse {
  data?: TranslateResult[]
  error?: ApiError
}

const handler = async (req: NextApiRequest, res: NextApiResponse<TranslateResponse>) => {
  if (req.method === 'GET') {
    res.statusCode = 404
    res.json({
      error: {
        message: '/api/translate received a GET request, use POST',
        code: '404',
      },
    })
    return
  }

  // Example:
  // Second item is in Czech - cs, third in German - de
  //
  // texts = ['What is it?', 'Co to je?', 'Was ist das?']
  // dontTranslateLanguages = ['en', 'cs']
  // primaryLanguage = 'en'
  const { texts, dontTranslateLanguages, primaryLanguage } = req.body.params

  const { data: detectData, error: detectError, status: detectStatus } = await detect(
    texts
  )

  if (detectError) {
    res.statusCode = detectStatus
    res.json({ error: detectError })
    return
  }

  // detectedLanguages = ['en', 'cs', 'de']
  const detectedLanguages = detectData.data.detections
    .map((d) => d[0].language)
    .map(mapCode)

  // textsToBeTranslated = ['', '', 'Was ist das?']
  const textsToBeTranslated = texts.map((t, i) => {
    if (dontTranslateLanguages.includes(detectedLanguages[i])) {
      return ''
    }

    return t
  })

  const { data, error, status } = await translate(textsToBeTranslated, primaryLanguage)

  if (error) {
    res.statusCode = status
    res.json({ error })
    return
  }

  // result = [
  //   { text: 'What is it?' },
  //   { text: 'Co to je?' },
  //   { text: 'What is it?', sourceLanguage: 'de', original: 'Was ist das?' },
  // ]
  const result = data.data.translations.map(
    ({ translatedText, detectedSourceLanguage }, i) => {
      if (translatedText === '') return { text: texts[i] }

      return {
        text: translatedText,
        sourceLanguage: detectedSourceLanguage,
        original: texts[i],
      }
    }
  )

  res.statusCode = 200
  res.json({ data: result })
}

export default handler
