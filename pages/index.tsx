import { NextRouter, useRouter } from 'next/router'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import Anonymous from '../components/anonymous'
import MainMenu from '../components/main-menu'
import { AppState, UserState } from '../state'

const menuNavigation: [string, string][] = [
  ['Pubs Nearby', '/map'],
  ['Account', '/account'],
  ['About', '/about'],
]

function Home(): JSX.Element {
  const router = useRouter()
  const { loggedIn } = useSelector<AppState, UserState>((state) => state.user)
  const onLoginClicked = useCallback(() => auth(router), [router])

  return (
    <div className="page-container stack">
      {!loggedIn && <Anonymous onLoginClicked={onLoginClicked} />}
      {loggedIn && <MainMenu nav={menuNavigation} />}
    </div>
  )
}

function auth(router: NextRouter): void {
  const isDev = process.env.NODE_ENV === 'development'
  const isAuthMocked = process.env.API_MOCKING_ENABLED === 'true'

  if (isDev && isAuthMocked) {
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

export default Home
