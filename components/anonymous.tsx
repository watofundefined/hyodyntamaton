export interface AnonymousProps {
  onLoginClicked: () => void
}

function Anonymous(props: AnonymousProps): JSX.Element {
  return (
    <>
      <main className="stack anonymous-container">
        <header>
          <span className="logo">Hyödyntämätön</span>
        </header>
        <span>Simple beer app built on top of Untappd and Foursquare APIs.</span>
        <span>Work in progress.</span>
        <button className="btn" onClick={props.onLoginClicked}>
          Log in with your Untappd account
        </button>
      </main>
    </>
  )
}

export default Anonymous
