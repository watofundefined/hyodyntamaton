import { RenderOptions as DefaultRenderOptions } from '@testing-library/react'
import { NextRouter } from 'next/router'

import { AppState } from '../redux'

export interface RenderOptions extends DefaultRenderOptions {
  state?: Partial<AppState>
  router?: Partial<NextRouter>
}
