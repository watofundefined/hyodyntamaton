import http, { IncomingMessage, Server, ServerResponse } from 'http'
import { NextApiHandler } from 'next'
import { apiResolver } from 'next/dist/next-server/server/api-utils'

export interface TestServer {
  listen: () => void
  close: (done: () => void) => void
}

export default function (handler: NextApiHandler): TestServer {
  let server: Server

  return {
    listen: () => {
      server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        return apiResolver(req, res, {}, handler, {
          previewModeId: '',
          previewModeEncryptionKey: '',
          previewModeSigningKey: '',
        })
      })
      server.listen({ port: process.env.PORT })
    },
    close: (done) => {
      // Avoid the "A worker process has failed to exit gracefully"
      server.once('close', () => {
        server.close()
        server.unref()
        setTimeout(() => done())
      })

      server.emit('close')
      done()
    },
  }
}
