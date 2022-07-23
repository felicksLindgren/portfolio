import { AppProps } from 'next/app'
import Head from 'next/head'
import SpeedDial from '../src/SpeedDial'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import { Backdrop } from '@mui/material'
import { useState } from 'react'
import { Face, Home } from '@mui/icons-material'
import Link from '../src/Link'

const actions = [
  {
    icon: <Link sx={{ color: '#00000099', display: 'grid', placeItems: 'center' }} href="/about"><Face /></Link>,
    name: 'About'
  },
  {
    icon: <Link sx={{ color: '#00000099', display: 'grid', placeItems: 'center' }} href="/"><Home /></Link>,
    name: 'Home'
  }
]

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Backdrop open={open} />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Portfolio of Felix Lindgren" />
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className={styles.main}>
        <Component {...pageProps} />
        <SpeedDial setOpen={setOpen} open={open} actions={actions} {...pageProps} />
      </main>
      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}

export default MyApp
