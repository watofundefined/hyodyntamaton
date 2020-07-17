require('dotenv').config({
  path: require('path').resolve(process.cwd(), '.env.development'),
})

// Untappd
process.env.NEXT_PUBLIC_UNTAPPD_AUTHENTICATE_URL = 'http://untappd.auth.xyz'
process.env.NEXT_PUBLIC_UNTAPPD_API_URL = 'http://untappd.api.xyz'
process.env.NEXT_PUBLIC_UNTAPPD_CLIENT_ID = 'fake-client-id'

const port = 8800 + Number(process.env.JEST_WORKER_ID)
process.env.PORT = process.env.PORT || port.toString()
