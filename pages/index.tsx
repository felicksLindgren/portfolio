import { Chip, Stack } from '@mui/material'
import { AppContext, AppProps } from 'next/app'
import Link from '../src/Link'
import styles from '../styles/Home.module.css'
import { Site } from './api/sites'

type IndexProps = {
  sites: Site[]
} & AppProps

export async function getServerSideProps(context: AppContext) {
  const res = await fetch('http://felix.lindgren.app/api/sites');

  return {
    props: {
      sites: await res.json()
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
        {sites.map((site, index) => (
          <Link key={index} target="_blank" href={site.href} className={styles.card}>
            <h2>{site.name} &rarr;</h2>
            <p>{site.description}</p>

            <Stack mt={1} direction={'row'} spacing={1}>
              {site.tags.map((tag, index) => (
                <Chip key={index} label={tag}></Chip>
              ))}
            </Stack>
          </Link>
        ))}
      </div>
    </>
  )
}
