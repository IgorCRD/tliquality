import React from 'react'
import { StaticRouter } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './screens/Routes'

interface AppProps {
  url?: string
}
export const App = ({ url }: AppProps) => {
  if (typeof window === 'undefined') {
    return (
      <StaticRouter location={url}>
        <Routes />
      </StaticRouter>
    )
  }

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
