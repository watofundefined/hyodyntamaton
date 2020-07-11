import http, { Server, IncomingMessage, ServerResponse } from 'http'
import axios from 'axios'
import { apiResolver } from 'next/dist/next-server/server/api-utils'

import handler from '../../pages/api/untappd-authorize'

const apiContext = {
  previewModeId: '',
  previewModeEncryptionKey: '',
  previewModeSigningKey: '',
}

let server: Server

beforeEach(() => {
  let requestHandler = (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    return apiResolver(req, res, {}, handler, apiContext)
  }
  server = http.createServer(requestHandler)
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
  test("responds 400 to GET without any 'code' query param", async () => {
    expect.assertions(1)
    return axios
      .get(`http://localhost:${process.env.PORT}/`)
      .catch((e) => expect(e.response.status).toBe(400))
  })
})
