import { rest } from 'msw'
import { url } from './authorize'

export default rest.get(new RegExp('^' + url), (req, res, ctx) => {
  if (
    req.url.searchParams.get('code') === process.env.NEXT_PUBLIC_MOCKED_UNTAPPD_AUTH_CODE
  ) {
    return res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json({ response: { access_token: process.env.MOCKED_UNTAPPD_ACCESS_TOKEN } })
    )
  }

  return res(ctx.status(400), ctx.delay(100))
})
