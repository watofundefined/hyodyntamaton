import React from 'react'
import { render, fireEvent } from 'test/test-utils'
import Anonymous from './anonymous'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Anonymous onLoginClicked={() => null} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders Log in button', () => {
    const { getByText } = render(<Anonymous onLoginClicked={() => null} />)
    expect(() => getByText(/log in/i)).not.toThrow()
  })

  it('calls the onLoginClicked cb when clicked', () => {
    const cb = jest.fn()

    const { getByText } = render(<Anonymous onLoginClicked={cb} />)
    const loginButton = getByText(/log in/i)
    fireEvent.click(loginButton)

    expect(cb).toHaveBeenCalledTimes(1)
  })
})
