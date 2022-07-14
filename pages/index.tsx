import { Chip, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { AppContext, AppProps } from 'next/app'
import { useState } from 'react'
import Link from '../src/Link'
import styles from '../styles/Home.module.css'
import { Site } from './api/sites'

type IndexProps = {
  sites: Site[]
} & AppProps

export async function getServerSideProps(context: AppContext) {
  // const res = await fetch('http://localhost:3000/api/sites');

  return {
    props: {
      sites: []
    },
  }
}

export default function Home({ sites }: IndexProps) {
  return (
    <>
      <h1 className={styles.title}>
        Hello 👋
      </h1>

      <p className={styles.description}>
        <code className={styles.code}>me, myself and I 👨‍💻</code>
      </p>

      <div className={styles.grid}>
        <Link target="_blank" href="https://felixpwa.web.app/" className={styles.card}>
          <h2>felixpwa.web.app &rarr;</h2>
          <p>Early attempt at portfolio</p>
          <Stack mt={1} direction={'row'} spacing={1}>
            <Chip label="Angular"></Chip>
            <Chip label="Firebase"></Chip>
          </Stack>

        </Link>

        <Link
          target="_blank"
          href="https://webrtc-1311e.web.app/"
          className={styles.card}
        >
          <h2>webrtc-1311e.web.app &rarr;</h2>
          <p>Testing out WebRTC with simple video chat</p>
          <Stack mt={1} direction={'row'} spacing={1}>
            <Chip label="JavaScript"></Chip>
            <Chip label="Firebase"></Chip>
          </Stack>
        </Link>

        <Link target="_blank" href="https://react-superchat-81ad0.web.app/" className={styles.card}>
          <h2>react-superchat-81ad0.web.app &rarr;</h2>
          <p>Simple chat app</p>
          <Stack mt={1} direction={'row'} spacing={1}>
            <Chip label="React.js"></Chip>
            <Chip label="Firebase"></Chip>
          </Stack>
        </Link>
      </div>
    </>
  )
}
