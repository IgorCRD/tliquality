export declare type Rating = {
  from: 'BTC' | 'ETH' | 'DAI' | 'USDC' | 'USDT' | 'WBTC'
  to: 'BTC' | 'ETH' | 'DAI' | 'USDC' | 'USDT' | 'WBTC'
  rate: number
  orderExpiresIn: number
  status: 'ACTIVE' | 'NOT_ACTIVE'
  max: number
  min: number
  createdAt: string
  updatedAt: string
  minConf: number
}
