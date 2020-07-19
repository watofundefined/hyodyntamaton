import { NextApiRequest, NextApiResponse } from 'next'
import {
  venuesSearch,
  FsVenue,
  FsVenuesSearchReq,
  FsVenueCategoryId,
} from 'lib/endpoints'
import { VenuesSearchResponse, Venue, VenuesSearchRequest } from 'lib/api/types'
import { QueryDict, VenueCategory } from 'lib/types'

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
  let categories = req.categories as VenueCategory[]
  categories = categories && categories.length ? categories : allBeerVenueCategories()

  return {
    ll: lat + ',' + lng,
    radius: +radius,
    categoryId: categories.map(apiCategoryToFsCategory).join(','),
    client_id: process.env.NEXT_PUBLIC_FOURSQUARE_ID,
    client_secret: process.env.FOURSQUARE_SECRET,
    v: process.env.NEXT_PUBLIC_FOURSQUARE_VERSION_DATE,
  }
}

function toVenues(v: FsVenue): Venue {
  return {
    fsId: v.id,
    name: v.name,
    url: v.url,
    location: {
      lat: v.location.lat,
      lng: v.location.lng,
    },
    categories: v.categories.map((c) => fsCategoryToApiCategory(c.id)),
  }
}

function fsCategoryToApiCategory(fsId: FsVenueCategoryId): VenueCategory {
  switch (fsId) {
    case FsVenueCategoryId.Cidery:
      return 'cidery'
    case FsVenueCategoryId.BeerBar:
      return 'beer-bar'
    case FsVenueCategoryId.Brewery:
      return 'brewery'
    case FsVenueCategoryId.BeerStore:
      return 'beer-shop'
    case FsVenueCategoryId.BeerGarden:
      return 'beer-garden'
    default:
      return 'other'
  }
}

function apiCategoryToFsCategory(c: VenueCategory): string {
  switch (c) {
    case 'cidery':
      return FsVenueCategoryId.Cidery
    case 'beer-bar':
      return FsVenueCategoryId.BeerBar
    case 'brewery':
      return FsVenueCategoryId.Brewery
    case 'beer-shop':
      return FsVenueCategoryId.BeerStore
    case 'beer-garden':
      return FsVenueCategoryId.BeerGarden
    default:
      throw new Error(`Unkown category '${c}'`)
  }
}

function allBeerVenueCategories(): VenueCategory[] {
  return ['cidery', 'beer-bar', 'brewery', 'beer-shop', 'beer-garden']
}
