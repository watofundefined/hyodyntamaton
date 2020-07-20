import React from 'react'
import { render, fireEvent } from 'test/test-utils'
import MainMenu from './main-menu'

const options: [string, string][] = [
  ['Pubs Nearby', '/map'],
  ['Account', '/account'],
  ['About', '/about'],
]

describe('MainMenu component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<MainMenu nav={options} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders button for each nav item', () => {
    const { getAllByRole } = render(<MainMenu nav={options} />)
    const buttons = getAllByRole('button')
    expect(buttons).toHaveLength(options.length)
  })

  it('redirects after button is clicked', () => {
    const push = jest.fn()
    const { getByText } = render(<MainMenu nav={options} />, { router: { push } })
    const [name, route] = options[0]
    const button = getByText(new RegExp(name, 'i'))

    fireEvent.click(button)

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith(route)
  })
})
