export interface UserState {
  loggedIn: boolean
  token: string | null
}

function defaultState(): UserState {
  return { loggedIn: false, token: null }
}

function reducer(state = defaultState(), action): UserState {
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

export default { reducer, defaultState }
