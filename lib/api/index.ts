import { client, ApiResult } from 'lib/http'
import { VenuesSearchRequest, VenuesSearchResponse } from './types'

export default {
  venues: {
    search: function (req: VenuesSearchRequest): ApiResult<VenuesSearchResponse> {
      return client.get('/api/venues-search', {
        params: req,
      })
    },
  },
}

export * from './types'
