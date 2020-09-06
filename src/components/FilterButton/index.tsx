import React from 'react'
import styles from './filterButtonStyle.module.scss'

interface FilterButtonProps {
  coin: string
  onClick: (coin: string) => void
  active: boolean
}
export const FilterButton = ({ coin, active, onClick }: FilterButtonProps) => {
  return (
    <button
      key={coin}
      type="button"
      className={`${styles.button} ${active ? '' : styles.buttonInactive}`}
      onClick={() => {
        if (onClick) {
          onClick(coin)
        }
      }}
    >
      <img
        src={`/assets/img/${coin.toLowerCase()}.svg`}
        alt="coin logo"
        className={styles.filterImg}
        width="20"
        height="20"
      />
    </button>
  )
}
