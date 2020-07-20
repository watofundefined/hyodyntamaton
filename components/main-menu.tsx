import { useRouter } from 'next/router'

export interface MainMenuProps {
  nav: [string, string][]
}

function MainMenu(props: MainMenuProps) {
  const router = useRouter()

  return (
    <>
      {props.nav.map(([displayName, route], index) => {
        return (
          <button key={index} className="btn" onClick={() => router.push(route)}>
            {displayName}
          </button>
        )
      })}
    </>
  )
}

export default MainMenu
