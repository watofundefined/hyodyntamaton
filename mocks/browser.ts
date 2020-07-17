import { setupWorker } from 'msw'

import authMock from 'gateways/untappd/authorize.mock'

const handlers = [authMock]

export default setupWorker(...handlers)
