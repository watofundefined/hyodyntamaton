import Rating from './rating'
import { VenueInfoCheckin } from 'lib/types'

export interface CheckinProps {
  data: VenueInfoCheckin
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
    translatedComment,
    user: { user_name },
    rating_score,
  } = data

  const time = timeFormatter.format(new Date(created_at))

  return (
    <li key={checkin_id} className="venue-details-checkin">
      <time className="checkin-time" dateTime={time}>
        {time}
      </time>
      <section className="checkin-details">
        <span className="checkin-beer-name">
          {beer_name} {beer_abv}%
        </span>
        <span>{beer_style}</span>
        <span>{breweryLine(brewery_name, country_name, brewery_city)}</span>
        <span className="checkin-score">
          <Rating score={rating_score} />
          <span className="checkin-username">- {user_name}</span>
        </span>
        {checkin_comment && (
          <span>
            <q className="checkin-comment">{translatedComment || checkin_comment}</q>
            {translatedComment && (
              <span className="checkin-comment-translated">(translated)</span>
            )}
          </span>
        )}
        <button
          className="btn btn-secondary checkin-see-more-button"
          onClick={() => onShowBeerDetailsClicked(bid)}
        >
          See more reviews
        </button>
      </section>
    </li>
  )
}

function breweryLine(name: string, country: string, city?: string) {
  return `${name} - ${city ? city + ', ' : ''}${country}`
}
