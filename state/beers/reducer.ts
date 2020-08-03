import { UtBeerInfo } from 'lib/endpoints/untappd/beer-info.types'
import { Dictionary } from 'lib/types'
import { BeersAction } from './actions'

export type BeersState = Dictionary<UtBeerInfo>

function defaultState(): BeersState {
  return {}
}

function reducer(state = defaultState(), action: BeersAction): BeersState {
  switch (action.type) {
    case 'ADD_BEER_DETAILS':
      return {
        ...state,
        [action.payload.bid]: action.payload,
      }
    default:
      return state
  }
}

export default { reducer, defaultState }
