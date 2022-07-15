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
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio of Felix Lindgren"></meta>
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
