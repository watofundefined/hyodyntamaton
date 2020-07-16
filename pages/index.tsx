import { useSelector } from 'react-redux'
import Anonymous from '../components/anonymous'
import MainMenu from '../components/main-menu'
import { AppState, UserState } from '../state'

function Home(): JSX.Element {
  const { loggedIn } = useSelector<AppState, UserState>((state) => state.user)

  return (
    <div className="page-container stack">
      {!loggedIn && <Anonymous />}
      {loggedIn && <MainMenu />}
    </div>
  )
}

export default Home
