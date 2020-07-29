import api from 'lib/api'
import { Venue } from 'lib/types'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, UserState, VenuesActions } from 'state'
import Checkins from './venue-details-checkins'

export interface VenueDetailsProps {
  venueFsId: string
}

export default function VenueDetails({ venueFsId }: VenueDetailsProps): JSX.Element {
  const { token } = useSelector<AppState, UserState>((state) => state.user)
  const venue = useSelector<AppState, Venue>((state) =>
    state.venues.items.find((i) => i.ids.foursquareId === venueFsId)
  )

  const [apiError, setApiError] = useState<string>(null)
  const [isFetchingCheckins, setIsFetchingCheckins] = useState(false)
  const [checkinsMaxHeight, setCheckinsMaxHeight] = useState(400)
  const dispatch = useDispatch()

  const { ids, checkins, name, categories } = venue
  const { foursquareId, untappedId } = ids

  useEffect(() => {
    if (untappedId) return

    api.venues.foursquareIdToUntappdId(foursquareId, token).then((res) => {
      const { error, data } = res

      if (error) setApiError(error.message)
      else dispatch(VenuesActions.addUntappdId(data))
    })
  }, [untappedId, foursquareId, token, dispatch])

  useEffect(() => {
    // run just once before any checkins are loaded, then the let user load more
    if (!untappedId || checkins.length) return

    setIsFetchingCheckins(true)

    api.venues.info(untappedId, token).then((res) => {
      const { error, data } = res

      setIsFetchingCheckins(false)

      if (error) setApiError(error.message)
      else dispatch(VenuesActions.addVenueInfo(data.response.venue))
    })
  }, [untappedId, checkins, token, dispatch])

  useEffect(() => {
    const update = () => setCheckinsMaxHeight(calculateVenueCheckinsHeight())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const memoizedFetchMoreCheckins = useCallback(() => {
    setIsFetchingCheckins(true)
    const maxId = checkins[checkins.length - 1].checkin_id

    api.venues
      .checkins(untappedId, { access_token: token, max_id: maxId })
      .then((res) => {
        const { error, data } = res

        setIsFetchingCheckins(false)

        if (error) setApiError(error.message)
        else
          dispatch(
            VenuesActions.addCheckins({
              utId: untappedId,
              checkins: data.response.checkins.items,
            })
          )
      })
  }, [untappedId, dispatch, token, checkins])

  return (
    <div className="venue-details">
      <h2 className="venue-name">
        {name}
        <span className="venue-category">{categories.map((c) => c.name).join(', ')}</span>
      </h2>
      {apiError && <span>Error: {apiError}</span>}
      {venue && (
        <Checkins
          loading={isFetchingCheckins}
          checkins={checkins}
          onFetchMoreClicked={memoizedFetchMoreCheckins}
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
