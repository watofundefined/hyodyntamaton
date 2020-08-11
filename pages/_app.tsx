import { AppProps } from 'next/app'
import { useEffect } from 'react'
import Modal from 'react-modal'
import { Provider } from 'react-redux'
import { Action, applyMiddleware, compose, createStore, Dispatch, Store } from 'redux'
import AuthValidator from '../components/auth-validator'
import StaticHead from '../components/static-head'
import { getInitialState, reducer } from '../state'
import '../styles/index.scss'

// Logic to handle SSR, grab token from localStorage only on the client - duh.
// This causes Next.js to throw a warning when user already has a token,
// because there's a discrepancy between the SSR'd version and the client version.
// (Warning is 'Expected server HTML to contain a matching text node...')
// The only way I see this go away is if I'd use cookies or different routes.
// Ignoring for now.
const isBrowser = typeof document != 'undefined'
const token = isBrowser ? localStorage.getItem('token') : null
const isDev = process.env.NODE_ENV === 'development'

const store = createStore(
  reducer,
  getInitialState({
    user: {
      loggedIn: token != null,
      token,
    },
  }),
  isDev ? applyMiddleware(logger) : compose()
)

const publicRoutes = ['/', '/auth', '/about']

Modal.setAppElement('#__next')

if (isBrowser && isDev && process.env.NEXT_PUBLIC_API_MOCKING_ENABLED === 'true') {
  require('../mocks/browser').default.start()
}

function App({ Component: Page, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof document != 'undefined') {
      // Fix for 100vh overflowing on mobiles
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    }
  }, [])

  return (
    <Provider store={store}>
      <StaticHead />
      <AuthValidator publicRoutes={publicRoutes}>
        <Page {...pageProps} />
      </AuthValidator>
    </Provider>
  )
}

function logger(store: Store) {
  return (next: Dispatch) => {
    return (action: Action) => {
      // eslint-disable-next-line no-console
      console.log('dispatching', action)
      const result = next(action)
      // eslint-disable-next-line no-console
      console.log('next state', store.getState())
      return result
    }
  }
}

export default App
