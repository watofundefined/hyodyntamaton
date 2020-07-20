import { rest } from 'msw'
import { url } from './authorize'
import { UtAuthResponse } from './authorize.types'

export default rest.get(new RegExp('^' + url), (req, res, ctx) => {
  if (
    req.url.searchParams.get('code') === process.env.NEXT_PUBLIC_MOCKED_UNTAPPD_AUTH_CODE
  ) {
    return res(ctx.delay(100), ctx.status(200), ctx.json(getMockedData()))
  }

  return res(ctx.status(400), ctx.delay(100))
})

function getMockedData(): UtAuthResponse {
  return { response: { access_token: process.env.MOCKED_UNTAPPD_ACCESS_TOKEN } }
}
