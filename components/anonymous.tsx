function Anonymous(): JSX.Element {
  return (
    <>
      <header>
        <span className="logo">Hyödyntämätön</span>
      </header>
      <main>
        App which translates beer reviews to your language.
        <button className="btn" onClick={auth}>
          Log in with your Untappd account
        </button>
      </main>
    </>
  )
}

function auth(): void {
  window.location.assign(untappdUrl())
}

function untappdUrl(): string {
  const cid = process.env.NEXT_PUBLIC_UNTAPPD_CLIENT_ID
  const url = process.env.NEXT_PUBLIC_UNTAPPD_AUTHENTICATE_URL
  const redirectUrl = window.location.origin + '/auth'

  return `${url}?client_id=${cid}&redirect_url=${redirectUrl}&response_type=code`
}

export default Anonymous
