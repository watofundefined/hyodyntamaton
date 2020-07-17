import { setupServer } from 'msw/node'
import authMock from 'gateways/untappd/authorize.mock'

const handlers = [authMock]

export default setupServer(...handlers)
