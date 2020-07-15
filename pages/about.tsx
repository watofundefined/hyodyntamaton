import Head from 'next/head'
import { useRouter } from 'next/router'

function About(): JSX.Element {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Hyödyntämätön | About</title>
      </Head>
      <div className="page-container">
        <h1>About</h1>
        <p>App with minimum noise.</p>
        <h2>Features</h2>
        <ul>
          <li>
            If any content is in language that you don&apos;t understand, it&apos;s
            automatically translated
          </li>
          <li>Settings are not synced between devices.</li>
          <li>Nothing is stored on the server.</li>
          <li>Browser stores Untappd access token and your language preferences.</li>
          <li>
            Open-source, code available at{' '}
            <a href="https://github.com/watofundefined/hyodyntamaton">GitHub repo</a>
          </li>
        </ul>
        <button className="btn" onClick={() => router.push('/')}>
          Back to menu
        </button>
      </div>
    </>
  )
}

export default About
