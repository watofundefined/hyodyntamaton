import { setupWorker } from 'msw'
import mocks from 'lib/endpoints/mocks'

const handlers = [...mocks]

export default setupWorker(...handlers)
