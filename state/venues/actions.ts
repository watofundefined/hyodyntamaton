import { VenueIds, Venue } from 'lib/types'
import { Action } from '../types'
import { UtVenueInfo } from 'lib/endpoints/untappd/venue-info.types'

export type VenuesAction =
  | Action<'ADD_VENUES', Venue[]>
  | Action<'ADD_UNTAPPD_ID', VenueIds>
  | Action<'ADD_VENUE_INFO', UtVenueInfo>

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

function addVenueInfo(venueInfo: UtVenueInfo): VenuesAction {
  return {
    type: 'ADD_VENUE_INFO',
    payload: venueInfo,
  }
}

export default { addUntappdId, addVenues, addVenueInfo }
