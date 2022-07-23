import { Chip, Stack } from '@mui/material'
import { AppProps } from 'next/app'
import useSWR from 'swr'
import Link from '../src/Link'
import styles from '../styles/Home.module.css'
import { Site } from './api/sites'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home(props: AppProps) {
  const { data, error } = useSWR<Site[], any>('/api/sites', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <h1 className={styles.title}>
        Hello 👋
      </h1>

      <p className={styles.description}>
        <code className={styles.code}>me, myself and I 👨‍💻</code>
      </p>

      <div className={styles.grid}>
        {data.map((site, index) => (
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

