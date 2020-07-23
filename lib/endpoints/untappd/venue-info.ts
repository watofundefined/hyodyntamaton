import { ApiResult, client } from 'lib/http'
import { BeerDetail, Beer } from 'lib/types'
import { UtReq } from './shared.types'
import {
  UtVenueInfoResponse,
  UtVenueInfoTopBeer,
  VenueInfoResponse,
  UtVenueInfo,
} from './venue-info.types'

export const url = process.env.NEXT_PUBLIC_UNTAPPD_API_URL + '/v4/venue/info/'

export function venueInfo(id: number, params: UtReq<{}>): ApiResult<VenueInfoResponse> {
  return client
    .get<UtReq<{}>, UtVenueInfoResponse>(url + id, { params })
    .then((r) => {
      if (r.error) {
        return {
          error: r.error,
          status: r.status,
          data: null,
        }
      }

      return {
        status: r.status,
        data: mapResponse(r.data.response.venue),
        error: null,
      }
    })
}

function mapResponse(venue: UtVenueInfo): VenueInfoResponse {
  return {
    topBeerIds: venue.top_beers.items.map((b) => b.beer.bid),
    lastCheckins: venue.checkins.items.map((c) => ({
      id: c.checkin_id,
      beerId: c.beer.bid,
      rating: c.rating_score,
      userId: c.user.uid,
      comment: c.checkin_comment,
      createdAt: c.created_at,
    })),
    beers: getBeers(venue),
    beerDetails: getBeerDetails(venue.top_beers.items),
  }
}

function getBeers(venue: UtVenueInfo): Beer[] {
  const result: Beer[] = []

  const beers = [...venue.checkins.items, ...venue.top_beers.items]

  beers.forEach(({ beer, brewery }) => {
    result.push({
      id: beer.bid,
      breweryId: brewery.brewery_id,
      name: beer.beer_name,
      abv: beer.beer_abv,
      style: beer.beer_style,
    })
  })

  return result
}

function getBeerDetails(beers: UtVenueInfoTopBeer[]): BeerDetail[] {
  return beers.map(({ beer }) => ({
    id: beer.bid,
    rating: beer.rating_score,
    numberOfRatings: beer.rating_count,
    ibu: beer.beer_ibu,
    description: beer.beer_description,
  }))
}
