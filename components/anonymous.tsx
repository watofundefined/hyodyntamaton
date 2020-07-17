import { useRouter, NextRouter } from 'next/router'

function Anonymous(): JSX.Element {
  const router = useRouter()

  return (
    <>
      <header>
        <span className="logo">Hyödyntämätön</span>
      </header>
      <main>
        App which translates beer reviews to your language.
        <button className="btn" onClick={() => auth(router)}>
          Log in with your Untappd account
        </button>
      </main>
    </>
  )
}

function auth(router: NextRouter): void {
  const env = process.env.NODE_ENV
  const authMocked = process.env.NEXT_PUBLIC_MOCKING_ENABLED

  if (env === 'development' && authMocked === 'true') {
    router.push(`/auth?code=${process.env.NEXT_PUBLIC_MOCKED_UNTAPPD_AUTH_CODE}`)
  } else {
    window.location.assign(untappdUrl())
  }
}

function untappdUrl(): string {
  const cid = process.env.NEXT_PUBLIC_UNTAPPD_CLIENT_ID
  const url = process.env.NEXT_PUBLIC_UNTAPPD_AUTHENTICATE_URL
  const redirectUrl = window.location.origin + '/auth'

  return `${url}?client_id=${cid}&redirect_url=${redirectUrl}&response_type=code`
}

export default Anonymous
