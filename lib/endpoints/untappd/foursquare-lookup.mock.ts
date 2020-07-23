import { rest } from 'msw'
import { url } from './foursquare-lookup'
import { UtFoursquareLookupResponse } from './foursquare-lookup.types'

export default rest.get(url + ':fsId', (req, res, ctx) => {
  const { fsId } = req.params
  return res(ctx.status(200), ctx.json(getMockedData(fsId)))
})

function getMockedData(fsId: string): UtFoursquareLookupResponse {
  return {
    response: {
      venue: {
        count: 1,
        items: [
          {
            foursquare_id: fsId,
            venue_id: 214324123,
            venue_name: 'Dummy Venue Name',
            last_updated: 'Wed, 15 Jul 2020 09:46:43 +0000',
          },
        ],
      },
    },
    meta: {
      code: 200,
      response_time: {
        time: 0.393,
        measure: 'seconds',
      },
      init_time: {
        time: 0,
        measure: 'seconds',
      },
    },
  }
}
