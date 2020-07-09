import { useRouter } from 'next/router'

function MainMenu() {
  const router = useRouter()

  return (
    <>
      <button onClick={() => router.push('/map')}>Pubs Nearby</button>
      <button onClick={() => router.push('/account')}>Account</button>
      <button onClick={() => router.push('/about')}>About</button>
    </>
  )
}

export default MainMenu
