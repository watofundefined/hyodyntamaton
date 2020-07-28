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
    // run just once before any checkins are loaded, then the let user load more
    if (!venue.ids.untappedId || venue.checkins.length) return

    api.venues.info(venue.ids.untappedId, token).then((res) => {
      const { error, data } = res

      if (error) setApiError(error.message)
      else dispatch(VenuesActions.addVenueInfo(data.response.venue))
    })
  }, [venue.ids, venue.checkins, token, dispatch])

  function fetchMoreCheckins() {
    const id = venue.checkins[venue.checkins.length - 1].venue.venue_id
    // eslint-disable-next-line no-console
    console.log('Fetching more checkins after: ', id)
  }

  return (
    <>
      {venue.url && (
        <h2>
          <a href={venue.url}>{venue.name}</a>
        </h2>
      )}
      {!venue.url && <h2>{venue.name}</h2>}
      <ul>
        {venue.categories.map((c, i) => (
          <li key={i}>{c.name}</li>
        ))}
      </ul>
      {apiError && <span>Error: {apiError}</span>}
      <section className="checkins">
        <header className="checkins-header">Last Checkins</header>
        {venue.checkins.map((c) => (
          <div className="checkin" key={c.checkin_id}>
            {c.beer.beer_name} by {c.brewery.brewery_name} ({c.rating_score})
            {c.beer.beer_style}
          </div>
        ))}
        {venue && venue.checkins.length && (
          <button onClick={fetchMoreCheckins}>Load more</button>
        )}
      </section>
    </>
  )
}
