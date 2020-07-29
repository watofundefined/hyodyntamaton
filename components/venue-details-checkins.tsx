import api from 'lib/api'
import { UtVenueInfoCheckin } from 'lib/endpoints/untappd/venue-info.types'
import { Dictionary } from 'lib/types'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { AppState, UserState } from 'state'
import Checkin from './checkin'

export interface CheckinsProps {
  loading: boolean
  checkins: UtVenueInfoCheckin[]
  onFetchMoreClicked: () => void
  maxHeight: number
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
}: CheckinsProps) {
  function onShowBeerDetailsClicked(id: number): void {
    // eslint-disable-next-line no-console
    api.beer.info(id, token).then((res) => console.log(res))
  }

  const { token } = useSelector<AppState, UserState>((state) => state.user)

  const memoizedFetchBeerDetails = useCallback(onShowBeerDetailsClicked, [token])

  if (loading && !checkins.length) return <section className="checkins">Loading</section>

  const grouped = groupCheckinsByDate(checkins)

  return (
    <section className="checkins" style={{ maxHeight: maxHeight.toString() + 'px' }}>
      <header>Latest feed:</header>
      {Object.keys(grouped).map((day) =>
        markupForEachDay(day, grouped[day], memoizedFetchBeerDetails)
      )}
      {!loading && checkins.length && (
        <button className="btn" onClick={onFetchMoreClicked}>
          Load more
        </button>
      )}
      {loading && <div>Loading</div>}
    </section>
  )
}

function markupForEachDay(
  day: string,
  checkins: UtVenueInfoCheckin[],
  onShowBeerDetailsClicked: (id: number) => void
) {
  return (
    <div key={day} className="day-checkins">
      <div className="day">{day}</div>
      {checkins.map((c) => (
        <Checkin
          key={c.checkin_id}
          data={c}
          onShowBeerDetailsClicked={onShowBeerDetailsClicked}
        />
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
