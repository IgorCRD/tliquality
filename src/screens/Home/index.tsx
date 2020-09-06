import React from 'react'
import Head from 'next/head'
import { useQuery } from 'hooks/useQuery'
import { Rating } from 'types/Rating'
import styles from './homeStyle.module.scss'

export const Home = () => {
  const { data } = useQuery('rattings', () =>
    fetch('https://liquality.io/swap/agent/api/swap/marketinfo').then(
      (res) => res.json() as Promise<Array<Rating>>
    )
  )

  return (
    <>
      <div className={styles.hero}>
        <Head>
          <title>Liquality ratings</title>
        </Head>

        <h1 className={styles.title}>
          <a href="https://liquality.io">Liquality</a> ratings!
        </h1>

        <p className={styles.description}>
          Easy realtime ratings for your realtime crypto needs.
        </p>
      </div>

      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <div>
              <h3>Data</h3>
              <pre>{JSON.stringify(data, null, '  ')}</pre>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://liquality.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <img src="/logo.svg" alt="Liquality Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </>
  )
}
