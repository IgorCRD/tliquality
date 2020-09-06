import React from 'react'
import styles from './refreshButtonStyle.module.scss'

interface RefreshButtonProps {
  active: boolean
  value: number
  text: string
  setRefreshRate: (value: number) => void
}
export const RefreshButton = ({
  active,
  value,
  text,
  setRefreshRate,
}: RefreshButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${active ? styles.activeButton : ''}`}
      onClick={() => setRefreshRate(value)}
    >
      {text}
    </button>
  )
}
