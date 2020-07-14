function logIn(token: string) {
  window.localStorage.setItem('token', token)

  return {
    type: 'LOG_IN',
    payload: { token },
  }
}

function logOut() {
  window.localStorage.removeItem('token')

  return {
    type: 'LOG_OUT',
  }
}

export default { logIn, logOut }
