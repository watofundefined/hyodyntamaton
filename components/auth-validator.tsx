import { Props } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'

import { AppState, UserState } from '../redux'

interface AuthValidatorProps extends Props<any> {
  publicRoutes: string[]
}

function AuthValidator(props: AuthValidatorProps): JSX.Element {
  const router = useRouter()
  const userState = useSelector<AppState, UserState>((state) => state.user)

  if (
    !props.publicRoutes.some((r) => router.asPath.startsWith(r)) &&
    !userState.loggedIn
  ) {
    router.push('/')
    return null
  }

  return <>{props.children}</>
}

// Router is required, but ther's no router on the server (╯°□°)╯︵ ┻━┻
export default dynamic(() => Promise.resolve(AuthValidator), {
  ssr: false,
})
