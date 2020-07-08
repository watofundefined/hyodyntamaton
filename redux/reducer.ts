import { combineReducers } from 'redux'
import { AppState, UserState } from './app-state'

function getInitialState({ ...overrides }: Partial<AppState> = {}): AppState {
  return {
    user: defaultUserState(),
    ...overrides,
  }
}

function defaultUserState(): UserState {
  return { loggedIn: false, token: null }
}

function userReducer(state = defaultUserState(), action): UserState {
  switch (action.type) {
    case 'LOG_IN':
      return {
        loggedIn: true,
        token: action.token,
      }
    case 'LOG_OUT':
      return {
        loggedIn: false,
        token: null,
      }
    default:
      return state
  }
}

const reducer = combineReducers({ user: userReducer })

export { reducer, getInitialState }
