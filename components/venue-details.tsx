import api from 'lib/api'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, UserState, VenuesActions, VenuesState } from 'state'

export interface VenueDetailsProps {
  venueFsId: string
}

export default function VenueDetails({ venueFsId }: VenueDetailsProps): JSX.Element {
  const { token } = useSelector<AppState, UserState>((state) => state.user)
  const venue = useSelector<AppState, VenuesState>((state) => state.venues).items.find(
    (i) => i.ids.foursquareId === venueFsId
  )

  const [apiError, setApiError] = useState<string>(null)
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
    if (!venue.ids.untappedId) return

    api.venues.info(venue.ids.untappedId, token).then((res) => {
      const { error, data } = res

      if (error) setApiError(error.message)
      else dispatch(VenuesActions.addVenueInfo(data.response.venue))
    })
  }, [venue.ids, token, dispatch])

  return (
    <>
      <h2>{venue.name}</h2>
      <ul>
        {venue.categories.map((c, i) => (
          <li key={i}>{c.name}</li>
        ))}
      </ul>
      {apiError && <span>Error: {apiError}</span>}
      UntappdId: {venue.ids.untappedId}
      <br />
      FoursquareId: {venue.ids.foursquareId}
    </>
  )
}
