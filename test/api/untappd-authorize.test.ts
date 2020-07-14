import http, { Server, IncomingMessage, ServerResponse } from 'http'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { apiResolver } from 'next/dist/next-server/server/api-utils'

import handler from '../../pages/api/untappd-authorize'

jest.mock('axios', () => {
  const originalModule = jest.requireActual('axios')
  const originalGet = originalModule.get

  function get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    switch (url) {
      case process.env.NEXT_PUBLIC_UNTAPPD_AUTHORIZE_URL: {
        return new Promise((resolve, reject) => {
          if (config.params.code == process.env.TEST_VALID_UNTAPPD_AUTH_CODE) {
            return resolve({
              status: 200,
              data: { response: { access_token: process.env.TEST_UNTAPPD_ACCESS_TOKEN } },
              statusText: 'ok',
              headers: {},
              config: {} as any,
            })
          }

          reject({
            status: 400,
            data: { error: 'failed authentication - invalid code' },
          })
        })
      }
      default: {
        return originalGet(url, config)
      }
    }
  }

  return {
    ...originalModule,
    get,
  }
})

let server: Server

beforeEach(() => {
  server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    return apiResolver(req, res, {}, handler, {
      previewModeId: '',
      previewModeEncryptionKey: '',
      previewModeSigningKey: '',
    })
  })
  server.listen({ port: process.env.PORT })
})

afterEach((done) => {
  // Avoid the "A worker process has failed to exit gracefully"
  server.once('close', () => {
    server.close()
    server.unref()
    setTimeout(() => done())
  })

  server.emit('close')
})

describe('/api/untappd-authorize handler', () => {
  test('responds 400 when no code is passed', async () => {
    expect.assertions(1)
    return axios
      .get(`http://localhost:${process.env.PORT}/`)
      .catch((e) => expect(e.response.status).toBe(400))
  })

  test('responds 400 when invalid code is used', async () => {
    expect.assertions(1)
    return axios
      .get(`http://localhost:${process.env.PORT}?code=not-a-valid-code`)
      .catch((e) => expect(e.response.status).toBe(400))
  })

  test('responds 200 and token when valid code is used', async () => {
    expect.assertions(2)
    return axios
      .get(
        `http://localhost:${process.env.PORT}?code=${process.env.TEST_VALID_UNTAPPD_AUTH_CODE}`
      )
      .then((r) => {
        expect(r.status).toBe(200)
        expect(r.data.token).toBe(process.env.TEST_UNTAPPD_ACCESS_TOKEN)
      })
  })
})
