import { setupWorker } from 'msw'

import localMock from 'gateways/untappd/local.mock'

const handlers = [localMock]

export default setupWorker(...handlers)
