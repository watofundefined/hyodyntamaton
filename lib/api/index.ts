import { foursquareLookup, venueInfo, venueCheckins } from 'lib/endpoints'
import { ApiResult, client } from 'lib/http'
import { VenueIds } from 'lib/types'
import { VenuesSearchRequest, VenuesSearchResponse } from './types'
import { UtVenueInfoResponse } from 'lib/endpoints/untappd/venue-info.types'
import {
  UtVenueCheckinsRequest,
  UtVenueCheckinsResponse,
} from 'lib/endpoints/untappd/venue-checkins.types'

export default {
  venues: {
    search: (req: VenuesSearchRequest): ApiResult<VenuesSearchResponse> => {
      return client.get('/api/venues-search', {
        params: req,
      })
    },
    foursquareIdToUntappdId: (id: string, untappedToken: string): ApiResult<VenueIds> => {
      return foursquareLookup(id, { access_token: untappedToken })
    },
    info: (untappdId: number, untappedToken: string): ApiResult<UtVenueInfoResponse> => {
      return venueInfo(untappdId, { access_token: untappedToken })
    },
    checkins: (
      id: number,
      req: UtVenueCheckinsRequest
    ): ApiResult<UtVenueCheckinsResponse> => {
      return venueCheckins(id, req)
    },
  },
}

export * from './types'
