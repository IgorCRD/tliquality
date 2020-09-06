import { Coin } from './Coin'

export declare type Rate = {
  from: Coin
  to: Coin
  rate: number
  orderExpiresIn: number
  status: 'ACTIVE' | 'NOT_ACTIVE'
  max: number
  min: number
  createdAt: string
  updatedAt: string
  minConf: number
}
