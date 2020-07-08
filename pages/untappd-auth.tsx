import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

function UntappdAuth(): JSX.Element {
  const router = useRouter()
  const { code } = router.query

  if (!code) {
    return <ErrorPage statusCode={404} />
  }

  return <div className="container">Logged in! Your token is: {code}</div>
}

export default UntappdAuth
