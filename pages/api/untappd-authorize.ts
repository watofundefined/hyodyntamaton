import { NextApiRequest, NextApiResponse } from 'next'
import { ApiError } from 'lib/http'
import { utAuthorize } from 'lib/endpoints'

export interface AuthorizeRequest {
  code: string
}

export interface AuthorizeResponse {
  token?: string
  error?: ApiError
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthorizeResponse>
) {
  const code = req.query.code as string

  if (!code) {
    res.statusCode = 400
    res.json({
      error: {
        code: 'untappd-authorize-missing-code',
        message: "Couldn't complete Untappd authorization process. Missing code param.",
      },
    })
    return
  }

  const { status, error, data } = await utAuthorize({
    code,
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_UNTAPPD_CLIENT_ID,
    client_secret: process.env.UNTAPPD_CLIENT_SECRET,
    redirect_url: new URL(req.headers.referer).origin + '/auth',
  })

  res.statusCode = status
  res.json(error ? { error } : { token: data.response.access_token })
}
