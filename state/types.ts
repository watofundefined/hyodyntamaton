import { UserState } from './user/reducer'
import { VenuesState } from './venues/reducer'
import { BeersState } from './beers/reducer'

export type Action<TType extends string = string, TPayload = undefined> = {
  type: TType
  payload?: TPayload
}

export interface AppState {
  user: UserState
  venues: VenuesState
  beers: BeersState
}

export type { UserState } from './user/reducer'
export type { VenuesState } from './venues/reducer'
export type { BeersState } from './beers/reducer'
