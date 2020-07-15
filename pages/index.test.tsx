import React from 'react'
import { render } from 'test/test-utils'
import Home from './index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders Log in button if user is logged out', () => {
    const { getByText } = render(<Home />)
    expect(() => getByText(/log in/i)).not.toThrow()
  })

  it('matches snapshot when user is logged in', () => {
    const { asFragment } = render(<Home />, {
      state: { user: { loggedIn: true, token: 'token' } },
    })
    expect(asFragment()).toMatchSnapshot()
  })
})
