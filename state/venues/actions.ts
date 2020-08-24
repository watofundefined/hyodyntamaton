import { VenueIds, Venue } from 'lib/types'
import { Action } from '../types'
import { UtVenueInfo, UtVenueInfoCheckin } from 'lib/endpoints/untappd/venue-info.types'

export interface AddVenueCheckinsPayload {
  utId: number
  checkins: UtVenueInfoCheckin[]
}

export interface VenueCheckinsTranslations {
  venueUntappdId: number
  translations: { checkinId: number; translatedText: string }[]
}

export type VenuesAction =
  | Action<'ADD_VENUES', Venue[]>
  | Action<'ADD_UNTAPPD_ID', VenueIds>
  | Action<'ADD_VENUE_INFO', UtVenueInfo>
  | Action<'ADD_VENUE_CHECKINS', AddVenueCheckinsPayload>
  | Action<'UPDATE_VENUE_CHECKINS_TRANSLATIONS', VenueCheckinsTranslations>

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

function updateVenueCheckins(translationInfo: VenueCheckinsTranslations): VenuesAction {
  return {
    type: 'UPDATE_VENUE_CHECKINS_TRANSLATIONS',
    payload: translationInfo,
  }
}

function addCheckins(payload: AddVenueCheckinsPayload): VenuesAction {
  return {
    type: 'ADD_VENUE_CHECKINS',
    payload,
  }
}

export default { addUntappdId, addVenues, addVenueInfo, addCheckins, updateVenueCheckins }
