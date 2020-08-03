import { render } from 'test/test-utils'
import Rating from './rating'

describe('Rating component', () => {
  it('matches snapshot for 0', async () => {
    expect(render(<Rating score={0} />).asFragment()).toMatchSnapshot()
  })

  it('matches snapshot for 1', async () => {
    expect(render(<Rating score={1} />).asFragment()).toMatchSnapshot()
  })

  it('matches snapshot for 2', async () => {
    expect(render(<Rating score={2} />).asFragment()).toMatchSnapshot()
  })

  it('matches snapshot for 3', async () => {
    expect(render(<Rating score={3} />).asFragment()).toMatchSnapshot()
  })

  it('matches snapshot for 4', async () => {
    expect(render(<Rating score={4} />).asFragment()).toMatchSnapshot()
  })

  it('matches snapshot for 5', async () => {
    expect(render(<Rating score={5} />).asFragment()).toMatchSnapshot()
  })

  it('matches snapshot for 2.25', async () => {
    expect(render(<Rating score={2.25} />).asFragment()).toMatchSnapshot()
  })

  it('matches snapshot for 3.5', async () => {
    expect(render(<Rating score={3.5} />).asFragment()).toMatchSnapshot()
  })

  it('matches snapshot for 4.75', async () => {
    expect(render(<Rating score={4.75} />).asFragment()).toMatchSnapshot()
  })

  it('matches snapshot for 4.051', async () => {
    expect(render(<Rating score={4.051} />).asFragment()).toMatchSnapshot()
  })
})
