import { UtVenueInfoCheckin } from 'lib/endpoints/untappd/venue-info.types'
import Rating from './rating'

export interface CheckinsProps {
  loading: boolean
  checkins: UtVenueInfoCheckin[]
  onFetchMoreClicked: () => void
  maxHeight: number
}

export type Dictionary<T> = { [key: string]: T } | { [key: number]: T }

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'numeric',
  weekday: 'long',
})
const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: 'numeric',
  minute: 'numeric',
})

export default function Checkins({
  loading,
  checkins,
  onFetchMoreClicked,
  maxHeight,
}: CheckinsProps) {
  if (loading && !checkins.length) return <section className="checkins">Loading</section>

  const grouped = groupCheckinsByDate(checkins)

  return (
    <section className="checkins" style={{ maxHeight: maxHeight.toString() + 'px' }}>
      <header>Latest feed:</header>
      {Object.keys(grouped).map((day) => markupForEachDay(day, grouped[day]))}
      {!loading && checkins.length && (
        <button className="btn" onClick={onFetchMoreClicked}>
          Load more
        </button>
      )}
      {loading && <div>Loading</div>}
    </section>
  )
}

function markupForEachDay(day: string, checkins: UtVenueInfoCheckin[]) {
  return (
    <div key={day} className="day-checkins">
      <div className="day">{day}</div>
      {checkins.map((c) => (
        <div key={c.checkin_id} className="checkin">
          <span className="time">{timeFormatter.format(new Date(c.created_at))}</span>
          <span className="checkin-details">
            <span className="beer-name">
              {c.beer.beer_name} {c.beer.beer_abv}%
            </span>
            <span>{c.beer.beer_style}</span>
            <span>
              {c.brewery.brewery_name} - {c.brewery.location.brewery_city}
              {c.brewery.country_name}
            </span>
            <span className="score">
              <Rating score={c.rating_score} />
              <span className="username">— {c.user.user_name}</span>
            </span>
            {c.checkin_comment && <q className="comment">{c.checkin_comment}</q>}
          </span>
        </div>
      ))}
    </div>
  )
}

function groupCheckinsByDate(
  checkins: UtVenueInfoCheckin[]
): Dictionary<UtVenueInfoCheckin[]> {
  return checkins.reduce((result, checkin) => {
    const day = dateFormatter.format(new Date(checkin.created_at))

    if (!result[day]) result[day] = []

    result[day].push(checkin)

    return result
  }, {})
}
