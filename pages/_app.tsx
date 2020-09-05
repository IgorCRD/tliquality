import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import '../styles/globals.css'

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType<NextPageContext>
  pageProps: any
}) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default MyApp
