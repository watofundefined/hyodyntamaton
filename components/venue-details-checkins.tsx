import { Dictionary, VenueInfoCheckin } from 'lib/types'
import Checkin from './checkin'

export interface CheckinsProps {
  loading: boolean
  checkins: VenueInfoCheckin[]
  onFetchMoreClicked: () => void
  maxHeight: string
  onShowBeerDetails: (id: number) => void
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'numeric',
  weekday: 'long',
})

export default function Checkins({
  loading,
  checkins,
  onFetchMoreClicked,
  maxHeight,
  onShowBeerDetails,
}: CheckinsProps) {
  if (loading && !checkins.length) return <section className="checkins">Loading</section>

  const grouped = groupCheckinsByDate(checkins)

  return (
    <section className="venue-details-checkins" style={{ maxHeight }}>
      <header>Latest feed:</header>
      <ol>
        {Object.keys(grouped).map((day) =>
          markupForEachDay(day, grouped[day], onShowBeerDetails)
        )}
      </ol>
      <div className="checkins-bottom-drawer">
        {!loading && checkins.length && (
          <button className="btn" onClick={onFetchMoreClicked}>
            Load more
          </button>
        )}
        {loading && <div>Loading</div>}
      </div>
    </section>
  )
}

function markupForEachDay(
  day: string,
  checkins: VenueInfoCheckin[],
  onShowBeerDetailsClicked: (id: number) => void
) {
  return (
    <li key={day}>
      <time
        className="checkins-day"
        dateTime={formatDayForDateTime(checkins[0].created_at)}
      >
        {day}
      </time>
      <ol className="checkins-day-list">
        {checkins.map((c) => (
          <Checkin
            key={c.checkin_id}
            data={c}
            onShowBeerDetailsClicked={onShowBeerDetailsClicked}
          />
        ))}
      </ol>
    </li>
  )
}

function groupCheckinsByDate(
  checkins: VenueInfoCheckin[]
): Dictionary<VenueInfoCheckin[]> {
  return checkins.reduce((result, checkin) => {
    const day = dateFormatter.format(new Date(checkin.created_at))

    if (!result[day]) result[day] = []

    result[day].push(checkin)

    return result
  }, {})
}

function formatDayForDateTime(date: string): string {
  const d = new Date(date)
  const pad = (n: number) => n.toString().padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth())}-${pad(d.getDate())}`
}
