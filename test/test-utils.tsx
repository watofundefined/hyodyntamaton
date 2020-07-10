import { render as _render, RenderResult } from '@testing-library/react'
import { createStore, Store } from 'redux'
import { Provider } from 'react-redux'
import { NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/next-server/lib/router-context'

import { reducer, getInitialState } from '../redux'
import { RenderOptions } from './test-utils.types'

function render(ui: JSX.Element, opts: RenderOptions = {}): RenderResult {
  const { state, router, ...options } = opts

  const Wrapper = createWrapper(
    createStore(reducer, getInitialState(state)),
    createRouter(router)
  )

  return _render(ui, { wrapper: Wrapper, ...options })
}

function createWrapper(store: Store, router: NextRouter) {
  return function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <RouterContext.Provider value={router}>
          {children}
        </RouterContext.Provider>
      </Provider>
    )
  }
}

function createRouter(overrides: Partial<NextRouter> = {}): NextRouter {
  return {
    route: '/',
    pathname: '/',
    asPath: '/',
    push: () => Promise.resolve(true),
    basePath: '',
    query: {},
    replace: () => Promise.resolve(true),
    reload: () => {},
    back: () => {},
    prefetch: () => Promise.resolve(),
    beforePopState: (_) => {},
    isFallback: false,
    events: {
      on: () => {},
      off: () => {},
      emit: () => {},
    },
    ...overrides,
  }
}

// Re-export all, and override the default render
export * from '@testing-library/react'
export { render }
