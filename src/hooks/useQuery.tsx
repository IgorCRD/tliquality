import { useQuery as useQueryReactQuery } from 'react-query'
import { useContext } from 'react'

import { QueryCacheContext } from '../contexts/QueryCacheContext'
import { QueryPromisesContext } from '../contexts/QueryPromises'

// Slightly moded react-quer/useQuery function that supports data fetching on server-side rendering
export const useQuery: typeof useQueryReactQuery = (
  queryKey: any,
  queryFn?: any,
  config?: any
) => {
  const queryCache = useContext(QueryCacheContext)
  const queryPromises = useContext(QueryPromisesContext)

  // queryCache and queryPromises are only present on SSR time,
  // so a prefetch is triggered and the promise is pushed into the the promise array.
  // When SSR the catchAll page we will await for all promises to be settled
  if (queryCache && queryPromises) {
    queryPromises.push(queryCache.prefetchQuery(queryKey, queryFn, config))
  }

  return useQueryReactQuery(queryKey, queryFn, config)
}
