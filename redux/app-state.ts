export interface UserState {
  loggedIn: boolean
  token: string | null
}

export interface AppState {
  user: UserState
}
