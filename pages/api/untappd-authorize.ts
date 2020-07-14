import { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

interface AuthorizeResponse {
  error?: string
  token?: string
}

interface UntappdResponse {
  response: { access_token: string }
}

const handler = async (req: NextApiRequest, res: NextApiResponse<AuthorizeResponse>) => {
  const code = req.query.code as string

  if (!code) {
    return error(res, "Couldn't complete Untappd authorization process. Missing code param.")
  }

  let authRes: AxiosResponse<UntappdResponse>

  try {
    authRes = await axios.get(
      process.env.NEXT_PUBLIC_UNTAPPD_AUTHORIZE_URL,
      reqConfig(req.headers.referer, code)
    )
  } catch (err) {
    return error(res, err)
  }

  success(res, { token: authRes.data.response.access_token })
}

function success(res: NextApiResponse, data) {
  res.statusCode = 200
  res.json(data)
}

function error(res: NextApiResponse, message: string) {
  res.statusCode = 400
  res.json({ error: message })
}

function reqConfig(referer: string, code: string): AxiosRequestConfig {
  const url = new URL(referer)

  return {
    params: {
      code,
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_UNTAPPD_CLIENT_ID,
      client_secret: process.env.UNTAPPD_CLIENT_SECRET,
      redirect_url: url.origin + '/auth',
    },
  }
}

export default handler
