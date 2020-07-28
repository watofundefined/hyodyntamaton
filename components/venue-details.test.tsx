import api from 'lib/api'
import { FsVenueCategoryId } from 'lib/endpoints'
import { Result } from 'lib/http'
import { VenueIds } from 'lib/types'
import { AppState } from 'state'
import { render } from 'test/test-utils'
import VenueDetails from './venue-details'

jest.mock('lib/api', () => {
  const realApi = jest.requireActual('lib/api')

  const api = {
    ...realApi.default,
  }

  api.venues.foursquareIdToUntappdId = jest.fn().mockImplementation((fsId) => {
    return new Promise<Result<VenueIds>>((resolve) =>
      resolve({
        data: {
          foursquareId: fsId,
          untappedId: 143241234,
        },
        status: 200,
        error: null,
      })
    )
  })

  return api
})

beforeEach(() => jest.clearAllMocks())

describe('VenueDetails component', () => {
  const fsId = 'abcd1234'
  const userToken = 'token'

  it('matches snapshot', async () => {
    const { asFragment } = render(<VenueDetails venueFsId={fsId} />, {
      state: makeState(userToken, fsId),
    })

    expect(asFragment()).toMatchSnapshot()
  })

  it("fetches the Untappd Id if it's missing", async () => {
    render(<VenueDetails venueFsId={fsId} />, { state: makeState(userToken, fsId) })

    expect(api.venues.foursquareIdToUntappdId).toHaveBeenCalledTimes(1)
    expect(api.venues.foursquareIdToUntappdId).toHaveBeenCalledWith(fsId, userToken)
  })

  it("doesn't fetch the Untappd Id if it's already populated", async () => {
    render(<VenueDetails venueFsId={fsId} />, { state: makeState(userToken, fsId, 1234) })

    expect(api.venues.foursquareIdToUntappdId).not.toHaveBeenCalled()
  })
})

function makeState(token: string, fsId: string, utId?: number): Partial<AppState> {
  return {
    user: { loggedIn: true, token },
    venues: {
      items: [
        {
          ids: {
            foursquareId: fsId,
            untappedId: utId,
          },
          name: 'Dummy Name',
          categories: [
            {
              name: 'Beer Bar',
              id: FsVenueCategoryId.BeerBar,
              icon: {
                prefix: 'prefix-icon',
                suffix: 'suffix-icon',
              },
              primary: true,
              shortName: 'short name of the category',
              pluralName: 'Beer Bars',
            },
          ],
          location: { lat: 123, lng: 123 },
          url: 'http://example.com',
          checkins: [],
        },
      ],
    },
  }
}
