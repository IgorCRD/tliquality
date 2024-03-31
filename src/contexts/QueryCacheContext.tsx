import React from 'react'
import { QueryClient } from 'react-query'

export const QueryCacheContext = React.createContext<QueryClient | null>(null)
