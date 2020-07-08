import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'

function Anonymous(): JSX.Element {
  const dispatch = useDispatch()

  return (
    <>
      <header>
        <span className="logo">Hyödyntämätön</span>
      </header>
      <main>
        App which translates beer reviews to your language.
        <button onClick={() => auth(dispatch)}>
          Log in with your Untappd account
        </button>
      </main>
    </>
  )
}

function auth(dispatch: Dispatch<any>): void {
  if (localhost()) {
    dispatch({ type: 'LOG_IN', token: null })
  } else {
    window.location.assign(untappdUrl())
  }
}

function localhost(): boolean {
  return window.location.href.includes('localhost')
}

function untappdUrl(): string {
  const clientId = process.env.NEXT_PUBLIC_UNTAPPD_CLIENT_ID
  const untappdUrl = process.env.NEXT_PUBLIC_UNTAPPD_AUTHENTICATE_URL
  const redirectUrl = window.location.origin + '/untappd-auth'

  return `${untappdUrl}?client_id=${clientId}&response_type=code&redirect_url=${redirectUrl}`
}

export default Anonymous
