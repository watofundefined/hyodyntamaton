import api from 'lib/api'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState, UserState, BeersActions } from 'state'
import { UtBeerInfo, UtBeerInfoVenue } from 'lib/endpoints/untappd/beer-info.types'
import Rating from './rating'

export interface BeerDetailsProps {
  id: number
}

export default function BeerDetails({ id }: BeerDetailsProps) {
  const { token } = useSelector<AppState, UserState>((state) => state.user)
  const beer = useSelector<AppState, UtBeerInfo>((state) => state.beers[id])
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token || beer) return

    api.beer
      .info(id, token)
      .then((res) => dispatch(BeersActions.addBeerInfo(res.data.response.beer)))
  }, [id, token, beer, dispatch])

  if (!beer) return <div>Loading</div>

  const {
    beer_name,
    beer_description,
    beer_abv,
    beer_ibu,
    beer_style,
    brewery: {
      brewery_name,
      country_name,
      location: { brewery_city },
    },
    weighted_rating_score,
    rating_count,
  } = beer

  const beerIbu = ibu(beer_ibu)

  return (
    <div className="beer-details">
      <h2 className="beer-name">
        {beer_name} {beer_abv}%
      </h2>
      <section className="meta">
        <span className="style">{beer_style}</span>
        {beerIbu > 0 && <span className="ibu">IBU {beerIbu}</span>}
        {beer_description && <q className="description">{beer_description}</q>}
        <span className="brewery">
          {breweryLine(brewery_name, country_name, brewery_city)}
        </span>
        <span className="weighted-score">
          Weighted rating: <Rating score={weighted_rating_score} /> ({rating_count})
        </span>
      </section>
      <section className="beer-checkins">
        <header>Latest reviews</header>
        {beer.checkins.items.map((c) => (
          <span key={c.checkin_id} className="beer-checkin">
            <Rating score={c.rating_score} />
            <span className="checkin-meta">
              <div className="username">{whoWhere(c.user.user_name, c.venue)}</div>
              {c.checkin_comment && <q className="comment">{c.checkin_comment}</q>}
            </span>
          </span>
        ))}
      </section>
    </div>
  )
}

function breweryLine(name: string, country: string, city?: string) {
  return `${name} - ${city ? city + ', ' : ''}${country}`
}

function whoWhere(username: string, venue: UtBeerInfoVenue | []): string {
  return username + where(venue)
}

function where(venue: UtBeerInfoVenue | []): string {
  if (!venue || Array.isArray(venue)) return ''

  if (venue.venue_name === 'Untappd at Home') return ' at Home'

  return ' at ' + venue.venue_name
}

function ibu(val: string | number): number {
  if (!val) return 0

  if (typeof val == 'number') return val

  return Number.parseFloat(val)
}
