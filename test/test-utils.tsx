import {
  render as defaultRender,
  RenderOptions as DefaultRenderOptions,
} from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { reducer, getInitialState } from '../redux/reducer'
import { AppState } from '../redux/app-state'

interface RenderOptions extends DefaultRenderOptions {
  initState?: Partial<AppState>
}

function makeWrapper(store) {
  return function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
}

function render(
  ui: JSX.Element,
  { initState = {}, ...options }: RenderOptions = {}
) {
  const store = createStore(reducer, getInitialState(initState))
  const Wrapper = makeWrapper(store)

  return defaultRender(ui, { wrapper: Wrapper, ...options })
}

// Re-export all, and override the default render
export * from '@testing-library/react'
export { render }
