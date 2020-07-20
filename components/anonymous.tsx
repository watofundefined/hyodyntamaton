export interface AnonymousProps {
  onLoginClicked: () => void
}

function Anonymous(props: AnonymousProps): JSX.Element {
  return (
    <>
      <header>
        <span className="logo">Hyödyntämätön</span>
      </header>
      <main>
        App which translates beer reviews to your language.
        <button className="btn" onClick={props.onLoginClicked}>
          Log in with your Untappd account
        </button>
      </main>
    </>
  )
}

export default Anonymous
