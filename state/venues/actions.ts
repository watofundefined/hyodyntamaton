import { VenueIds, Venue } from 'lib/types'
import { Action } from '../types'

export type VenuesAction =
  | Action<'ADD_VENUES', Venue[]>
  | Action<'ADD_UNTAPPD_ID', VenueIds>

function addVenues(venues: Venue[]): VenuesAction {
  return {
    type: 'ADD_VENUES',
    payload: venues,
  }
}

function addUntappdId(ids: VenueIds): VenuesAction {
  return {
    type: 'ADD_UNTAPPD_ID',
    payload: ids,
  }
}

export default { addUntappdId, addVenues }
