import { combineReducers } from 'redux'
import user from './user/reducer'
import venues from './venues/reducer'
import beers from './beers/reducer'
import { AppState } from './types'

function getInitialState(state: Partial<AppState> = {}): AppState {
  return {
    user: user.defaultState(),
    venues: venues.defaultState(),
    beers: beers.defaultState(),
    ...state,
  }
}

const reducer = combineReducers<AppState>({
  user: user.reducer,
  venues: venues.reducer,
  beers: beers.reducer,
})

export { reducer, getInitialState }
export * from './types'
export { default as UserActions } from './user/actions'
export { default as VenuesActions } from './venues/actions'
export { default as BeersActions } from './beers/actions'
