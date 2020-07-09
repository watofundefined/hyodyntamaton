import Head from 'next/head'
import { useRouter } from 'next/router'

function Map(): JSX.Element {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Hyödyntämätön | Pubs Nearby</title>
      </Head>
      <div className="container">
        Map
        <button onClick={() => router.push('/')}>Back to menu</button>
      </div>
    </>
  )
}

export default Map
