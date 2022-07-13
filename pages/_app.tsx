import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio of Felix Lindgren"></meta>
      </Head>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}

export default MyApp
