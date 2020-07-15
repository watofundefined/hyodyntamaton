/**
 * @jest-environment node // to prevent CORS errors
 */
import { client } from 'lib/http'
import mockServer from 'test/mock-server'
import testServer, { TestServer } from 'test/test-server'
import handler, { AuthorizeRequest, AuthorizeResponse } from './untappd-authorize'

beforeAll(() => mockServer.listen())
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())

let server: TestServer
beforeEach(() => {
  server = testServer(handler)
  server.listen()
})
afterEach((done) => server.close(done))

describe('/api/untappd-authorize handler', () => {
  test('responds 400 when no code is passed', async () => {
    expect.assertions(1)
    return client
      .get(`http://localhost:${process.env.PORT}/`, {
        headers: { referer: 'http://localhost' },
      })
      .then((r) => expect(r.status).toBe(400))
  })

  test('responds 400 when invalid code is used', async () => {
    expect.assertions(1)
    return client
      .get(`http://localhost:${process.env.PORT}`, {
        params: { code: 'not-a-valid-code' },
        headers: { referer: 'http://localhost' },
      })
      .then((r) => expect(r.status).toBe(400))
  })

  test('responds 200 and token when valid code is used', async () => {
    expect.assertions(2)
    return client
      .get<AuthorizeRequest, AuthorizeResponse>(`http://localhost:${process.env.PORT}`, {
        params: { code: process.env.TEST_VALID_UNTAPPD_AUTH_CODE },
        headers: { referer: 'http://localhost' },
      })
      .then((r) => {
        expect(r.status).toBe(200)
        expect(r.data.token).toBe(process.env.TEST_UNTAPPD_ACCESS_TOKEN)
      })
  })
})