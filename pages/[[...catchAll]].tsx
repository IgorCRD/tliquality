import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { NextPageContext } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'

// TODO: Check on this issue "Typescript unable to find type definition for react-query/hydration even though they exist"
// https://github.com/tannerlinsley/react-query/issues/970
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { dehydrate } from 'react-query/hydration'
import { App } from '../src/App'
import { QueryCacheContext } from '../src/contexts/QueryCacheContext'
import { QueryPromisesContext } from '../src/contexts/QueryPromises'

interface NextAppRootProps {
  location: string
}
const NextAppRoot = ({ location }: NextAppRootProps) => {
  return <App url={location} />
}

NextAppRoot.getInitialProps = async (context: NextPageContext) => {
  const { req } = context
  const queryCache = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })

  const promises: Array<Promise<any>> = []

  renderToStaticMarkup(
    <QueryClientProvider client={queryCache}>
      <QueryCacheContext.Provider value={queryCache}>
        <QueryPromisesContext.Provider value={promises}>
          <App url={req?.url} />
        </QueryPromisesContext.Provider>
      </QueryCacheContext.Provider>
    </QueryClientProvider>
  )

  await Promise.allSettled(promises)

  return {
    location: req?.url,
    dehydratedState: dehydrate(queryCache),
  }
}

export default NextAppRoot
