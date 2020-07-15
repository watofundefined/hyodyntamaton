import { rest } from 'msw'
import { url } from './authorize'

const resolver = rest.get(url, (req, res, ctx) => {
  ctx.delay
  if (req.url.searchParams.get('code') === process.env.TEST_VALID_UNTAPPD_AUTH_CODE) {
    return res(
      ctx.status(200),
      ctx.json({ response: { access_token: process.env.TEST_UNTAPPD_ACCESS_TOKEN } }),
      ctx.delay(100)
    )
  }

  return res(ctx.status(400), ctx.delay(100))
})

export default resolver
