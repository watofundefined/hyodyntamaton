import { ApiResult, rawClient, AxiosError } from 'lib/http'
import { VenueIds } from 'lib/types'
import { UtReq } from './shared.types'
import { UtFoursquareLookupResponse } from './foursquare-lookup.types'

export const url =
  process.env.NEXT_PUBLIC_UNTAPPD_API_URL + '/v4/venue/foursquare_lookup/'

/*
 * Foursquare Id --> Untappd Id
 *
 * Foursquare returns 500 when no venue is found - hence the extra logic
 */
export function foursquareLookup(
  fsVenueId: string,
  params: UtReq<{}>
): ApiResult<VenueIds> {
  return rawClient
    .get<UtFoursquareLookupResponse>(url + fsVenueId, { params })
    .then((res) => {
      return { status: res.status, error: null, data: mapRes(res.data) }
    })
    .catch((e: AxiosError) => {
      const { error_detail, code } = e.response.data.meta

      if (code === 500 && error_detail.startsWith('There is no Untappd venue match')) {
        return {
          status: 404,
          error: { code: 'ut-fs-lookup-not-found', message: error_detail as string },
          data: null,
        }
      }
    })
}

function mapRes(res: UtFoursquareLookupResponse): VenueIds {
  const { venue_id, foursquare_id } = res.response.venue.items[0]

  return {
    untappedId: venue_id,
    foursquareId: foursquare_id,
  }
}
