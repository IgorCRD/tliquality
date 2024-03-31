import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// TODO: Check on this issue "Typescript unable to find type definition for react-query/hydration even though they exist"
// https://github.com/tannerlinsley/react-query/issues/970
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Hydrate } from 'react-query/hydration'
import { NextComponentType, NextPageContext } from 'next'
import '../src/styles/globals.css'

interface NextJSAppProps {
  Component: NextComponentType<NextPageContext>
  pageProps: any
}

const NextJSApp = ({ Component, pageProps }: NextJSAppProps) => {
  const queryCache = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })

  return (
    <QueryClientProvider client={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default NextJSApp
