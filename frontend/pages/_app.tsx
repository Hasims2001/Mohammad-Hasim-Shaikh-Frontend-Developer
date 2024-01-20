import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <title>BITVERSE</title>
     <link rel="icon" href="/logo.svg"  type="image/svg+xml" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}
