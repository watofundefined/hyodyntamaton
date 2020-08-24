import Head from 'next/head'

function StaticHead() {
  return (
    <Head>
      <title>Hyödyntämätön</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Staatliches&display=block"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=block"
        rel="stylesheet"
      />
    </Head>
  )
}

export default StaticHead
