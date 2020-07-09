import querystring from 'querystring'
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const queryString = req.url.split('?')[1]
  const { code } = querystring.parse(queryString)

  if (!code) {
    res.statusCode = 400
    res.json({
      error:
        "Couldn't complete Untappd authorization process. " +
        'Wrong response from Untappd server.',
    })
    return
  }

  try {
    const untappdRes = await axios.get(
      process.env.NEXT_PUBLIC_UNTAPPD_AUTHORIZE_URL,
      {
        params: getRequestParams(req.headers.referer, code),
      }
    )

    res.statusCode = 200
    res.json({ token: untappdRes.data.response.access_token })
  } catch (error) {
    res.statusCode = 400
    res.json({ error })
  }
}

function getRequestParams(referer: string, code: string | string[]): object {
  const url = new URL(referer)

  return {
    code,
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_UNTAPPD_CLIENT_ID,
    client_secret: process.env.UNTAPPD_CLIENT_SECRET,
    redirect_url: url.origin + '/auth',
  }
}

export default handler