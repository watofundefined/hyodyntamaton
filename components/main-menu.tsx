import { useDispatch } from 'react-redux'

import { UserActions } from '../redux'

function MainMenu() {
  const dispatch = useDispatch()

  return (
    <>
      Welcome back!<button>Show map</button>
      <button onClick={() => dispatch(UserActions.logOut())}>Log out</button>
    </>
  )
}

export default MainMenu
