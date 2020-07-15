import { useRouter } from 'next/router'

function MainMenu() {
  const router = useRouter()

  return (
    <>
      <button className="btn" onClick={() => router.push('/map')}>
        Pubs Nearby
      </button>
      <button className="btn" onClick={() => router.push('/account')}>
        Account
      </button>
      <button className="btn" onClick={() => router.push('/about')}>
        About
      </button>
    </>
  )
}

export default MainMenu
