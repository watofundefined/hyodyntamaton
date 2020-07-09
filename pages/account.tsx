import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { UserActions } from '../redux'

function Account(): JSX.Element {
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Hyödyntämätön | Account</title>
      </Head>
      <div className="page-container">
        <h1>Account</h1>

        <button onClick={() => dispatch(UserActions.logOut())}>Log out</button>
        <button onClick={() => router.push('/')}>Back to menu</button>
      </div>
    </>
  )
}

export default Account
