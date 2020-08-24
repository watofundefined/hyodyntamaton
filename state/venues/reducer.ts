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
      return {
        items: state.items.map((v) => {
          if (v.ids.untappedId != action.payload.venue_id) return v

          return {
            ...v,
            checkins: action.payload.checkins.items,
          }
        }),
      }
    case 'ADD_VENUE_CHECKINS':
      return {
        items: state.items.map((v) => {
          if (v.ids.untappedId != action.payload.utId) return v

          return {
            ...v,
            checkins: [...v.checkins, ...action.payload.checkins],
          }
        }),
      }
    case 'UPDATE_VENUE_CHECKINS_TRANSLATIONS':
      return {
        items: state.items.map((v) => {
          if (v.ids.untappedId != action.payload.venueUntappdId) return v

          const idToText = action.payload.translations.reduce(
            (res, { checkinId, translatedText }) => {
              res[checkinId] = translatedText
              return res
            },
            {}
          )

          return {
            ...v,
            checkins: v.checkins.map((c) => {
              if (!idToText[c.checkin_id]) return c

              return {
                ...c,
                translatedComment: idToText[c.checkin_id],
              }
            }),
          }
        }),
      }

    default:
      return state
  }
}

export default { reducer, defaultState }
