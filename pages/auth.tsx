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

  const [state, setState] = useState<State>({ loading: true })
  const dispatch = useDispatch()

  useEffect(() => {
    if (!code) return

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
  }, [code, dispatch, router])

  if (!code) {
    return (
      <ErrorPage
        statusCode={400}
        title="Bad request, URL is missing query param 'code'"
      />
    )
  }

  const { status, loading, error } = state

  if (loading) return <>Loading</>

  if (error) return <ErrorPage statusCode={status} title={error.message} />
}

// Disable SSR since router is required
export default dynamic(() => Promise.resolve(UntappdAuth), {
  ssr: false,
})
