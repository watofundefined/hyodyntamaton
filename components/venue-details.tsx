import api from 'lib/api'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, UserState, VenuesActions, VenuesState } from 'state'
import Checkins from './venue-details-checkins'

export interface VenueDetailsProps {
  venueFsId: string
}

export default function VenueDetails({ venueFsId }: VenueDetailsProps): JSX.Element {
  const { token } = useSelector<AppState, UserState>((state) => state.user)
  const venue = useSelector<AppState, VenuesState>((state) => state.venues).items.find(
    (i) => i.ids.foursquareId === venueFsId
  )

  const [apiError, setApiError] = useState<string>(null)
  const [isFetchingCheckins, setIsFetchingCheckins] = useState(false)
  const [checkinsMaxHeight, setCheckinsMaxHeight] = useState(400)

  const dispatch = useDispatch()

  useEffect(() => {
    if (venue.ids.untappedId) return

    api.venues.foursquareIdToUntappdId(venue.ids.foursquareId, token).then((res) => {
      const { error, data } = res

      if (error) setApiError(error.message)
      else dispatch(VenuesActions.addUntappdId(data))
    })
  }, [venue.ids, token, dispatch])

  useEffect(() => {
    // run just once before any checkins are loaded, then the let user load more
    if (!venue.ids.untappedId || venue.checkins.length) return

    setIsFetchingCheckins(true)

    api.venues.info(venue.ids.untappedId, token).then((res) => {
      const { error, data } = res

      setIsFetchingCheckins(false)

      if (error) setApiError(error.message)
      else dispatch(VenuesActions.addVenueInfo(data.response.venue))
    })
  }, [venue.ids, venue.checkins, token, dispatch])

  useEffect(() => {
    setCheckinsMaxHeight(calculateVenueCheckinsHeight())
  }, [])

  function fetchMoreCheckins() {
    setIsFetchingCheckins(true)
    const id = venue.checkins[venue.checkins.length - 1].checkin_id

    api.venues
      .checkins(venue.ids.untappedId, { access_token: token, max_id: id })
      .then((res) => {
        const { error, data } = res

        setIsFetchingCheckins(false)

        if (error) setApiError(error.message)
        else
          dispatch(
            VenuesActions.addCheckins({
              utId: venue.ids.untappedId,
              checkins: data.response.checkins.items,
            })
          )
      })
  }

  return (
    <div className="venue-details">
      <h2 className="venue-name">
        {venue.name}
        <span className="venue-category">
          {venue.categories.map((c) => c.name).join(', ')}
        </span>
      </h2>
      {apiError && <span>Error: {apiError}</span>}
      {venue && (
        <Checkins
          loading={isFetchingCheckins}
          checkins={venue.checkins}
          onFetchMoreClicked={fetchMoreCheckins}
          maxHeight={checkinsMaxHeight}
        />
      )}
    </div>
  )
}

function calculateVenueCheckinsHeight(): number {
  if (typeof window == 'undefined') return 500

  const { height } = document.querySelector('.venue-details').getBoundingClientRect()

  // FIXME - replace 100 with <heading + 2 * padding + errorIfThereIsAny>
  return height - 100
}
