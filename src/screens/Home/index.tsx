import React, { useState } from 'react'
import Head from 'next/head'
import { useQuery } from 'hooks/useQuery'
import { RateCard } from 'components/RateCard'
import { RefreshButton } from 'components/RefreshButton'
import { Coin } from 'types/Coin'
import { FilterButton } from 'components/FilterButton'
import { useCoinFiltering } from 'hooks/useCoinFiltering'
import { getRates } from 'utils/getRates'
import styles from './homeStyle.module.scss'

export const Home = () => {
  const [refreshRate, setRefreshRate] = useState(15000)

  const { data: rates } = useQuery('rattings', () => getRates(), {
    refetchInterval: refreshRate,
  })

  const {
    filteredRates,
    filterToggleFrom,
    filterToggleTo,
    isActiveFrom,
    isActiveTo,
  } = useCoinFiltering({
    rates,
  })

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <Head>
            <title>Liquality rates</title>
          </Head>

          <h1 className={styles.title}>
            <a href="https://liquality.io">Liquality</a> rates!
          </h1>

          <p className={styles.description}>
            Realtime rates for your realtime crypto needs.
          </p>
        </div>

        <main className={styles.main}>
          <div className={styles.toolbar}>
            <div className={styles.filter}>
              From:
              {Object.keys(Coin).map((coin) => (
                <FilterButton
                  key={coin}
                  coin={coin}
                  onClick={filterToggleFrom}
                  active={isActiveFrom(coin)}
                />
              ))}
            </div>

            <div className={styles.filter}>
              To:
              {Object.keys(Coin).map((coin) => (
                <FilterButton
                  key={coin}
                  coin={coin}
                  onClick={filterToggleTo}
                  active={isActiveTo(coin)}
                />
              ))}
            </div>

            <div className={styles.filter}>
              <span>Refresh rate:</span>
              <RefreshButton
                value={5000}
                text="5s"
                active={refreshRate === 5000}
                setRefreshRate={setRefreshRate}
              />
              <RefreshButton
                value={10000}
                text="10s"
                active={refreshRate === 10000}
                setRefreshRate={setRefreshRate}
              />
              <RefreshButton
                value={15000}
                text="15s"
                active={refreshRate === 15000}
                setRefreshRate={setRefreshRate}
              />
            </div>
          </div>

          <div className={styles.grid}>
            {filteredRates?.map((rate) => (
              <RateCard
                key={`${rate.from}${rate.to}`}
                from={rate.from}
                to={rate.to}
                rate={rate.rate}
              />
            ))}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://liquality.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <img
              src="/assets/img/logo.svg"
              alt="Liquality Logo"
              className={styles.logo}
            />
          </a>
        </footer>
      </div>
    </>
  )
}
