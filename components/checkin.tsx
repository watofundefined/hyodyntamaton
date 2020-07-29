import Rating from './rating'
import { UtVenueInfoCheckin } from 'lib/endpoints/untappd/venue-info.types'

export interface CheckinProps {
  data: UtVenueInfoCheckin
  onShowBeerDetailsClicked: (id: number) => void
}

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: 'numeric',
  minute: 'numeric',
})

export default function Checkin({ data, onShowBeerDetailsClicked }: CheckinProps) {
  const {
    checkin_id,
    created_at,
    beer: { bid, beer_name, beer_style, beer_abv },
    brewery: {
      brewery_name,
      country_name,
      location: { brewery_city },
    },
    checkin_comment,
    user: { user_name },
    rating_score,
  } = data

  return (
    <div key={checkin_id} className="checkin">
      <span className="time">{timeFormatter.format(new Date(created_at))}</span>
      <span className="checkin-details">
        <span className="beer-name" onClick={() => onShowBeerDetailsClicked(bid)}>
          {beer_name} {beer_abv}%
        </span>
        <span>{beer_style}</span>
        <span>{breweryLine(brewery_name, country_name, brewery_city)}</span>
        <span className="score">
          <Rating score={rating_score} />
          <span className="username">— {user_name}</span>
        </span>
        {checkin_comment && <q className="comment">{checkin_comment}</q>}
      </span>
    </div>
  )
}

function breweryLine(name: string, country: string, city?: string) {
  return `${name} - ${city ? city + ', ' : ''}${country}`
}
