import { VenueIds, Venue } from 'lib/types'
import { Action } from '../types'
import { UtVenueInfo, UtVenueInfoCheckin } from 'lib/endpoints/untappd/venue-info.types'

export interface AddVenueCheckinsPayload {
  utId: number
  checkins: UtVenueInfoCheckin[]
}

export type VenuesAction =
  | Action<'ADD_VENUES', Venue[]>
  | Action<'ADD_UNTAPPD_ID', VenueIds>
  | Action<'ADD_VENUE_INFO', UtVenueInfo>
  | Action<'ADD_VENUE_CHECKINS', AddVenueCheckinsPayload>

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

function addCheckins(payload: AddVenueCheckinsPayload): VenuesAction {
  return {
    type: 'ADD_VENUE_CHECKINS',
    payload,
  }
}

export default { addUntappdId, addVenues, addVenueInfo, addCheckins }
