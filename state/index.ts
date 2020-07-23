import { combineReducers } from 'redux'
import user from './user/reducer'
import venues from './venues/reducer'
import { AppState } from './types'

function getInitialState(state: Partial<AppState> = {}): AppState {
  return {
    user: user.defaultState(),
    venues: venues.defaultState(),
    ...state,
  }
}

const reducer = combineReducers<AppState>({ user: user.reducer, venues: venues.reducer })

export { reducer, getInitialState }
export * from './types'
export { default as UserActions } from './user/actions'
export { default as VenuesActions } from './venues/actions'
