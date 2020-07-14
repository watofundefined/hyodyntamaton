
// Untappd
process.env.NEXT_PUBLIC_UNTAPPD_AUTHENTICATE_URL = 'http://untappd.auth.xyz'
process.env.NEXT_PUBLIC_UNTAPPD_AUTHORIZE_URL = 'http://untappd.authorize.xyz'
process.env.NEXT_PUBLIC_UNTAPPD_API_URL = 'http://untappd.api.xyz'
process.env.NEXT_PUBLIC_UNTAPPD_CLIENT_ID = 'fake-client-id'

// Test-only
process.env.TEST_VALID_UNTAPPD_AUTH_CODE = 'a-valid-auth-code'
process.env.TEST_UNTAPPD_ACCESS_TOKEN = 'untappd-access-token'

const port = 8800 + Number(process.env.JEST_WORKER_ID)
process.env.PORT = process.env.PORT || port.toString()
