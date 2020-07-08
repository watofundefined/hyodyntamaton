import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import StaticHead from '../components/static-head'
import { reducer, getInitialState } from '../redux'

import '../styles/index.scss'

// Logic to handle SSR, grab token from localStorage only on the client - duh.
// This causes Next.js to throw a warning when user already has a token,
// because there's a discrepancy between the SSR'd version and the client version.
// (Warning is 'Expected server HTML to contain a matching text node...')
// The only way I see this go away is if I'd use cookies or different routes.
// Ignoring for now.
const token =
  typeof document != 'undefined' ? localStorage.getItem('token') : null

const store = createStore(
  reducer,
  getInitialState({
    user: {
      loggedIn: token != null,
      token,
    },
  })
)

function App({ Component: Page, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StaticHead />
      <Page {...pageProps} />
    </Provider>
  )
}

export default App
