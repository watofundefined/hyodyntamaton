import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import dynamic from 'next/dynamic'
import axios from 'axios'

import { UserActions } from '../redux'

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

  const [state, setState] = useState({ loading: true, error: null })
  const dispatch = useDispatch()

  useEffect(() => {
    if (code) {
      axios.get('/api/untappd-authorize', { params: { code } }).then(
        (res) => {
          dispatch(UserActions.logIn(res.data.token))
          router.push('/')
        },
        (err) => {
          setState({
            loading: false,
            error: {
              status: err.response.status,
              message: err.response.data.error,
            },
          })
        }
      )
    }
  }, [])

  const { loading, error } = state

  if (loading) return <>Loading</>

  if (error)
    return <ErrorPage statusCode={error.status} title={error.message} />
}

// Prevent the warning "React has detected a change in the order of Hooks called".
// Next.js router works only on the client side so the SSR'd version of the page
// will never reach the `useEffect`. On the client it will, hence the warning.
// SSR is useless here anyway ¯\_(ツ)_/¯
export default dynamic(() => Promise.resolve(UntappdAuth), {
  ssr: false,
})
