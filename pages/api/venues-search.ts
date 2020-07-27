import { NextApiRequest, NextApiResponse } from 'next'
import {
  venuesSearch,
  FsVenue,
  FsVenuesSearchReq,
  FsVenueCategoryId,
} from 'lib/endpoints'
import { VenuesSearchResponse, VenuesSearchRequest } from 'lib/api'
import { QueryDict, Venue } from 'lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VenuesSearchResponse>
) {
  const { status, error, data } = await venuesSearch(apiReqToFsReq(req.query as any))

  res.statusCode = status

  if (error) res.json({ error })
  else res.json({ venues: data.response.venues.map(toVenues) })
}

function apiReqToFsReq(req: QueryDict<VenuesSearchRequest>): FsVenuesSearchReq {
  const lat = req.lat as string
  const lng = req.lng as string
  const radius = +req.radius

  return {
    ll: lat + ',' + lng,
    radius: +radius,
    categoryId: allBeerVenueCategories().join(','),
    client_id: process.env.NEXT_PUBLIC_FOURSQUARE_ID,
    client_secret: process.env.FOURSQUARE_SECRET,
    v: process.env.NEXT_PUBLIC_FOURSQUARE_VERSION_DATE,
  }
}

function toVenues(v: FsVenue): Venue {
  return {
    ids: { foursquareId: v.id },
    name: v.name,
    url: v.url,
    location: {
      lat: v.location.lat,
      lng: v.location.lng,
    },
    categories: v.categories,
  }
}

function allBeerVenueCategories(): FsVenueCategoryId[] {
  return [
    FsVenueCategoryId.BeerBar,
    FsVenueCategoryId.BeerGarden,
    FsVenueCategoryId.BeerStore,
    FsVenueCategoryId.Brewery,
    FsVenueCategoryId.Cidery,
  ]
}
