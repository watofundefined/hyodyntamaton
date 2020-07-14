import {
  render as _render,
  RenderOptions as _RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { NextRouter } from 'next/router'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import { AppState, getInitialState, reducer } from '../redux'

export interface RenderOpts extends _RenderOptions {
  state?: Partial<AppState>
  router?: Partial<NextRouter>
}

function render(ui: JSX.Element, opts: RenderOpts = {}): RenderResult {
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
        <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
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
    reload: () => null,
    back: () => null,
    prefetch: () => Promise.resolve(),
    beforePopState: (_) => null,
    isFallback: false,
    events: {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
    ...overrides,
  }
}

// Re-export all, and override the default render
export * from '@testing-library/react'
export { render }
