import Link from '../src/Link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Hello 👋
      </h1>

      <p className={styles.description}>
        <code className={styles.code}>me, myself and I 👨‍💻</code>
      </p>

      <div className={styles.grid}>
        <Link target="_blank" prefetch href="https://felixpwa.web.app/" className={styles.card}>
          <h2>felixpwa.web.app &rarr;</h2>
          <p>Early attempt at portfolio. Angular and Firebase 🔥</p>
        </Link>

        <Link href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </Link>

        <Link
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </Link>

        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </Link>
      </div>
    </>
  )
}
