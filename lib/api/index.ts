import { foursquareLookup, venueInfo, venueCheckins, beerSearch } from 'lib/endpoints'
import { ApiResult, client } from 'lib/http'
import { VenueIds } from 'lib/types'
import { VenuesSearchRequest, VenuesSearchResponse } from './types'
import { UtVenueInfoResponse } from 'lib/endpoints/untappd/venue-info.types'
import {
  UtVenueCheckinsRequest,
  UtVenueCheckinsResponse,
} from 'lib/endpoints/untappd/venue-checkins.types'
import { UtBeerInfoResponse } from 'lib/endpoints/untappd/beer-info.types'
import { beerInfo } from 'lib/endpoints/untappd/beer-info'
import {
  UtBeerSearchResponse,
  BeerSearchConfig,
} from 'lib/endpoints/untappd/beer-search.types'
import { SupportedLanguagesResponse } from 'pages/api/supported-languages'
import { TranslateRequest, TranslateResponse } from 'pages/api/translate'

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
  beer: {
    info: (id: number, token: string): ApiResult<UtBeerInfoResponse> => {
      return beerInfo(id, { access_token: token })
    },
    search: (req: BeerSearchConfig): ApiResult<UtBeerSearchResponse> => {
      return beerSearch(req)
    },
  },
  translation: {
    languages: (): ApiResult<SupportedLanguagesResponse> => {
      return client.get<{}, SupportedLanguagesResponse>('/api/supported-languages', {})
    },
    translate: (
      texts: string[],
      dontTranslateLanguages: string[],
      primaryLanguage: string
    ) => {
      return client.post<TranslateRequest, TranslateResponse>('/api/translate', {
        params: {
          texts,
          dontTranslateLanguages,
          primaryLanguage,
        },
      })
    },
  },
}

export * from './types'
