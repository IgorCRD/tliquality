import React from 'react'
import { QueryCache } from 'react-query'

export const QueryCacheContext = React.createContext<QueryCache | null>(null)
