import { LANGUAGES } from 'lib/shared/languages'
import { NextApiRequest, NextApiResponse } from 'next'
import { Dictionary } from 'lib/types'

export interface SupportedLanguagesResponse {
  languagesMap: Dictionary<string>
}

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ languagesMap: LANGUAGES })
}

export default handler
