import AuthValidator from '../../components/auth-validator'
import { render, act } from '../test-utils'

describe('AuthValidator component', () => {
  it("doesn't redirect when user is logged out and on public page", async () => {
    const push = jest.fn()

    await act(async () => {
      render(<AuthValidator publicRoutes={['/']}>Page</AuthValidator>, {
        state: { user: { loggedIn: false, token: null } },
        router: { push, route: '/' },
      })
    })

    expect(push).not.toHaveBeenCalled()
  })

  it("doesn't redirect when user is logged in and on public page", async () => {
    const push = jest.fn()

    await act(async () => {
      render(<AuthValidator publicRoutes={['/', '/b']}>Page</AuthValidator>, {
        state: { user: { loggedIn: true, token: 'token' } },
        router: { push, route: '/b' },
      })
    })

    expect(push).not.toHaveBeenCalled()
  })

  it("doesn't redirect when user is logged in and on authorized-only page", async () => {
    const push = jest.fn()

    await act(async () => {
      render(<AuthValidator publicRoutes={['/']}>Page</AuthValidator>, {
        state: { user: { loggedIn: true, token: 'token' } },
        router: { push, route: '/c' },
      })
    })

    expect(push).not.toHaveBeenCalled()
  })

  it('redirects when user is logged out and on authorized-only page', async () => {
    const push = jest.fn()

    await act(async () => {
      render(<AuthValidator publicRoutes={['/']}>Page</AuthValidator>, {
        state: { user: { loggedIn: false, token: null } },
        router: { route: '/c', push },
      })
    })

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith('/')
  })

  it('works also with query params', async () => {
    const push = jest.fn()

    await act(async () => {
      render(<AuthValidator publicRoutes={['/', '/b']}>Page</AuthValidator>, {
        state: { user: { loggedIn: false, token: null } },
        router: {
          route: '/b',
          asPath: '/b?lat=11&lng=11',
          query: { lat: '11', lng: '11' },
          push,
        },
      })
    })

    expect(push).not.toHaveBeenCalled()
  })
})
