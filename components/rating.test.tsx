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

  it('renders correct number of full circles for score 0', async () => {
    const { queryAllByTestId } = render(<Rating score={0} />)

    expect(queryAllByTestId('full-circle')).toHaveLength(0)
  })

  it('renders correct number of full circles for score 3', async () => {
    const { queryAllByTestId } = render(<Rating score={3} />)

    expect(queryAllByTestId('full-circle')).toHaveLength(3)
  })

  it('renders no quarter circles for score which is a whole number', async () => {
    const { queryAllByTestId } = render(<Rating score={3} />)

    expect(queryAllByTestId('quarter-circle')).toHaveLength(0)
  })

  it('renders no half circles for score which is a whole number', async () => {
    const { queryAllByTestId } = render(<Rating score={3} />)

    expect(queryAllByTestId('half-circle')).toHaveLength(0)
  })

  it('renders a quarter circle for a score which contains 0.25', async () => {
    const { queryAllByTestId } = render(<Rating score={3.25} />)

    expect(queryAllByTestId('quarter-circle')).toHaveLength(1)
  })

  it('renders a half circle for a score which contains 0.5', async () => {
    const { queryAllByTestId } = render(<Rating score={3.5} />)

    expect(queryAllByTestId('half-circle')).toHaveLength(1)
  })

  it('renders a quarter circle and a half circle for a score which contains 0.75', async () => {
    const { queryAllByTestId } = render(<Rating score={4.75} />)

    const fullCircles = queryAllByTestId('full-circle')
    const quarterCircles = queryAllByTestId('quarter-circle')
    const halfCircles = queryAllByTestId('half-circle')

    expect(fullCircles).toHaveLength(4)
    expect(quarterCircles).toHaveLength(1)
    expect(halfCircles).toHaveLength(1)
  })
})
