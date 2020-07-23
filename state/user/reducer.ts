import { UserAction } from './actions'

export interface UserState {
  loggedIn: boolean
  token?: string
}

function defaultState(): UserState {
  return { loggedIn: false, token: null }
}

function reducer(state = defaultState(), action: UserAction): UserState {
  switch (action.type) {
    case 'LOG_IN':
      return {
        loggedIn: true,
        token: action.payload.token,
      }
    case 'LOG_OUT':
      return { loggedIn: false }
    default:
      return state
  }
}

export default { reducer, defaultState }
