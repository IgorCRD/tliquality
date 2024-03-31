import { Coin } from 'types/Coin'
import { Rate } from 'types/Rate'

const coins: Array<Coin> = [
  Coin.BTC,
  Coin.DAI,
  Coin.ETH,
  Coin.USDC,
  Coin.USDT,
  Coin.WBTC,
]

export function getRates() {
  const mockedRates: Array<Rate> = []

  coins.forEach((coin) => {
    coins.forEach((coin2) => {
      if (coin === coin2) return

      mockedRates.push({
        from: coin,
        to: coin2,
        rate: Math.random(),
      })
    })
  })

  return Promise.resolve(mockedRates)
}
