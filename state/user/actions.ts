import { Action } from '../types'

export type UserAction = Action<'LOG_IN', { token: string }> | Action<'LOG_OUT'>

function logIn(token: string): UserAction {
  window.localStorage.setItem('token', token)

  return {
    type: 'LOG_IN',
    payload: { token },
  }
}

function logOut(): UserAction {
  window.localStorage.removeItem('token')

  return {
    type: 'LOG_OUT',
  }
}

export default { logIn, logOut }
