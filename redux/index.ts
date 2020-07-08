import { combineReducers } from 'redux'

import user, { UserState } from './user/reducer'

export interface AppState {
  user: UserState
}

function getInitialState({ ...overrides }: Partial<AppState> = {}): AppState {
  return {
    user: user.defaultState(),
    ...overrides,
  }
}

const reducer = combineReducers({ user: user.reducer })

export { reducer, getInitialState }
export type { UserState }
export { default as UserActions } from './user/actions'
