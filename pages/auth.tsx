import { ApiError, client } from 'lib/http'
import dynamic from 'next/dynamic'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { UserActions } from '../state'
import { AuthorizeRequest, AuthorizeResponse } from './api/untappd-authorize'

interface State {
  loading: boolean
  error?: ApiError
  status?: number
}

function UntappdAuth(): JSX.Element {
  const router = useRouter()
  const { code } = router.query

  if (!code) {
    return (
      <ErrorPage
        statusCode={400}
        title="Bad request, URL is missing query param 'code'"
      />
    )
  }

  const [state, setState] = useState<State>({ loading: true })
  const dispatch = useDispatch()

  useEffect(() => {
    if (code) {
      client
        .get<AuthorizeRequest, AuthorizeResponse>('/api/untappd-authorize', {
          params: { code: code as string },
        })
        .then(({ status, error, data }) => {
          if (error) {
            setState({ loading: false, error, status })
          } else {
            dispatch(UserActions.logIn(data.token))
            router.push('/')
          }
        })
    }
  }, [])

  const { status, loading, error } = state

  if (loading) return <>Loading</>

  if (error) return <ErrorPage statusCode={status} title={error.message} />
}

// Prevent the warning "React has detected a change in the order of Hooks called".
// Next.js router works only on the client side so the SSR'd version of the page
// will never reach the `useEffect`. On the client it will, hence the warning.
// SSR is useless here anyway ¯\_(ツ)_/¯
export default dynamic(() => Promise.resolve(UntappdAuth), {
  ssr: false,
})
