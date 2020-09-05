import React from 'react'
import { NextPageContext } from 'next'
import { App } from '../src/App'

interface NextAppRootProps {
  location: string
}
const NextAppRoot = ({ location }: NextAppRootProps) => {
  return <App url={location} />
}

NextAppRoot.getInitialProps = async (context: NextPageContext) => {
  const { req } = context

  return {
    location: req?.url,
  }
}

export default NextAppRoot
