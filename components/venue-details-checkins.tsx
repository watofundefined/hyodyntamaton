import { UtVenueInfoCheckin } from 'lib/endpoints/untappd/venue-info.types'

export interface CheckinsProps {
  loading: boolean
  checkins: UtVenueInfoCheckin[]
  onFetchMoreClicked: () => void
}

export default function Checkins({
  loading,
  checkins,
  onFetchMoreClicked,
}: CheckinsProps) {
  if (loading && !checkins.length) return <section className="checkins">Loading</section>

  return (
    <section className="checkins">
      <header className="checkins-header">Last Checkins</header>
      {checkins.map((c) => (
        <div className="checkin" key={c.checkin_id}>
          {c.beer.beer_name} by {c.brewery.brewery_name} ({c.rating_score})
          {c.beer.beer_style}
        </div>
      ))}
      {!loading && checkins.length && (
        <button onClick={onFetchMoreClicked}>Load more</button>
      )}
      {loading && <div>Loading</div>}
    </section>
  )
}
