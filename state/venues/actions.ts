import { VenueIds, Venue } from 'lib/types'
import { Action } from '../types'

export type VenuesAction =
  | Action<'ADD_VENUES', Venue[]>
  | Action<'UPDATE_VENUE', VenueIds>

function addVenues(venues: Venue[]): VenuesAction {
  return {
    type: 'ADD_VENUES',
    payload: venues,
  }
}

function addUntappdId(ids: VenueIds): VenuesAction {
  return {
    type: 'UPDATE_VENUE',
    payload: ids,
  }
}

export default { addUntappdId, addVenues }
