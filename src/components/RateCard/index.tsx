import React from 'react'
import { Coin } from 'types/Coin'
import styles from './rateCardStyle.module.scss'

interface RateCardProps {
  from: Coin
  to: Coin
  rate: number
}
export const RateCard = ({ from, to, rate }: RateCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.logoAndName}>
          <img
            src={`/assets/img/${from.toLowerCase()}.svg`}
            alt="coin logo"
            width="32"
            height="32"
          />
          <span>{from}</span>
        </div>

        <div className={styles.rate}>
          <div>{`1 ${from}`}</div>
          <div>=</div>
          <div>{`${rate} ${to}`}</div>
        </div>

        <div className={styles.logoAndName}>
          <img
            src={`/assets/img/${to.toLowerCase()}.svg`}
            alt="coin logo"
            width="32"
            height="32"
          />
          <span>{to}</span>
        </div>
      </div>

      <div className={styles.swapButtonContainer}>
        <img src="/assets/img/swap.svg" alt="swap icon" />
      </div>
    </div>
  )
}
