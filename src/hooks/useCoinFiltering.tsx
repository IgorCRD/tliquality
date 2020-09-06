import { useState, useCallback, useMemo } from 'react'
import { Rate } from 'types/Rate'
import { Coin } from 'types/Coin'

interface UseCoinFilteringProps {
  rates?: Array<Rate>
}

export const useCoinFiltering = ({ rates = [] }: UseCoinFilteringProps) => {
  const [coinFilterFrom, setCoinFilterFrom] = useState<Array<string>>([])
  const [coinFilterTo, setCoinFilterTo] = useState<Array<string>>([])

  const filterToggle = useCallback(
    (filterType: 'from' | 'to', value: string) => {
      const setFilter =
        filterType === 'from' ? setCoinFilterFrom : setCoinFilterTo

      setFilter((currentCoinFilter) => {
        let newCoinFilter = []
        if (currentCoinFilter.includes(value)) {
          // remove filter
          newCoinFilter = currentCoinFilter.filter((coin) => coin !== value)
        } else {
          // Add filter
          newCoinFilter = [...currentCoinFilter, value]
          if (Object.keys(Coin).length === newCoinFilter.length) {
            return []
          }
        }

        return newCoinFilter
      })
    },
    []
  )

  const filterToggleFrom = useCallback(
    (value: string) => filterToggle('from', value),
    [filterToggle]
  )

  const filterToggleTo = useCallback(
    (value: string) => filterToggle('to', value),
    [filterToggle]
  )

  const isActiveFrom = useCallback(
    (value: string) => {
      return coinFilterFrom.length === 0 || coinFilterFrom.includes(value)
    },
    [coinFilterFrom]
  )

  const isActiveTo = useCallback(
    (value: string) => {
      return coinFilterTo.length === 0 || coinFilterTo.includes(value)
    },
    [coinFilterTo]
  )

  const filteredRates = useMemo(() => {
    return rates?.filter(
      (rate) =>
        (coinFilterFrom.length === 0 || coinFilterFrom.includes(rate.from)) &&
        (coinFilterTo.length === 0 || coinFilterTo.includes(rate.to))
    )
  }, [rates, coinFilterFrom, coinFilterTo])

  return useMemo(
    () => ({
      filteredRates,
      filterToggleFrom,
      filterToggleTo,
      isActiveFrom,
      isActiveTo,
    }),
    [filterToggleFrom, filterToggleTo, filteredRates, isActiveFrom, isActiveTo]
  )
}
