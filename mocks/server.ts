import { setupServer } from 'msw/node'
import mocks from 'lib/endpoints/mocks'

const handlers = [...mocks]

export default setupServer(...handlers)
