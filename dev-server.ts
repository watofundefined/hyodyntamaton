import { createServer } from 'http'
import next from 'next'
import { parse } from 'url'
import mockServer from 'mocks/server'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res, parse(req.url, true))
  }).listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on http://localhost:3000')
    mockServer.listen()
  })
})
