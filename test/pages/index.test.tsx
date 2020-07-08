import React from 'react'
import { render } from '../test-utils'
import Home from '../../pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders Log in button if user is logged out', () => {
    const { getByText } = render(<Home />)
    expect(() => getByText(/log in/i)).not.toThrow()
  })

  it('renders Welcome back when user is logged in', () => {
    const { asFragment } = render(<Home />, {
      initState: { user: { loggedIn: true, token: null } },
    })
    expect(asFragment()).toMatchSnapshot()
  })
})
