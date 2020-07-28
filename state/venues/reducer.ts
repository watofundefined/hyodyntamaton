import { Venue } from 'lib/types'
import { VenuesAction } from './actions'

export interface VenuesState {
  items: Venue[]
}

function defaultState(): VenuesState {
  return { items: [] }
}

function reducer(state = defaultState(), action: VenuesAction): VenuesState {
  switch (action.type) {
    case 'ADD_VENUES':
      return {
        items: action.payload,
      }
    case 'ADD_UNTAPPD_ID':
      return {
        items: state.items.map((v) => {
          if (v.ids.foursquareId != action.payload.foursquareId) return v

          return {
            ...v,
            ids: action.payload,
          }
        }),
      }
    case 'ADD_VENUE_INFO':
      action.payload.checkins
      return {
        items: state.items.map((v) => {
          if (v.ids.untappedId != action.payload.venue_id) return v

          return {
            ...v,
            checkins: action.payload.checkins.items,
          }
        }),
      }
    default:
      return state
  }
}

export default { reducer, defaultState }
