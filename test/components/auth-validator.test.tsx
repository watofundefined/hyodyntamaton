import AuthValidator from '../../components/auth-validator'
import { render, act } from '../test-utils'

describe('AuthValidator component', () => {
  it("doesn't redirect when user is logged out and on public page", async () => {
    const push = jest.fn()

    await act(async () => {
      render(<AuthValidator publicRoutes={['/']}>Page</AuthValidator>, {
        router: { push },
      })
    })

    expect(push).not.toHaveBeenCalled()
  })

  it("doesn't redirect when user is logged in and on public page", async () => {
    const push = jest.fn()

    await act(async () => {
      render(
        <AuthValidator publicRoutes={['/', '/about']}>Page</AuthValidator>,
        {
          state: { user: { loggedIn: true, token: 'fake-token' } },
          router: { push, route: '/about' },
        }
      )
    })

    expect(push).not.toHaveBeenCalled()
  })

  it("doesn't redirect when user is logged in and on authorized-only page", async () => {
    const push = jest.fn()

    await act(async () => {
      render(<AuthValidator publicRoutes={['/']}>Page</AuthValidator>, {
        state: { user: { loggedIn: true, token: 'fake-token' } },
        router: { push, route: '/map' },
      })
    })

    expect(push).not.toHaveBeenCalled()
  })

  it('redirects when user is logged out and on authorized-only page', async () => {
    const push = jest.fn()

    await act(async () => {
      render(<AuthValidator publicRoutes={['/']}>Page</AuthValidator>, {
        router: { route: '/map', push },
      })
    })

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith('/')
  })

  it('works also with query params', async () => {
    const push = jest.fn()

    await act(async () => {
      render(
        <AuthValidator publicRoutes={['/', '/nearby']}>Page</AuthValidator>,
        {
          router: { route: '/nearby', asPath: '/nearby?lat=11&lng=11', push },
        }
      )
    })

    expect(push).not.toHaveBeenCalled()
  })
})
