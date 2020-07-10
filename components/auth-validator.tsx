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
  const { loggedIn } = useSelector<AppState, UserState>((state) => state.user)

  if (!loggedIn && !isPathPublic(props.publicRoutes, router.route)) {
    router.push('/')
    return null
  }

  return <>{props.children}</>
}

function isPathPublic(publicRoutes: string[], route: string): boolean {
  return publicRoutes.includes(route)
}

// This component needs router, but ther's no router on the server (╯°□°)╯︵ ┻━┻
export default dynamic(() => Promise.resolve(AuthValidator), {
  ssr: false,
})
