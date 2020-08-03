import { Action } from '../types'
import { UtBeerInfo } from 'lib/endpoints/untappd/beer-info.types'

export type BeersAction = Action<'ADD_BEER_DETAILS', UtBeerInfo>

function addBeerInfo(info: UtBeerInfo): BeersAction {
  return {
    type: 'ADD_BEER_DETAILS',
    payload: info,
  }
}

export default { addBeerInfo }
