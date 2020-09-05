import React from 'react'
import dynamic from 'next/dynamic'
import { Switch, Route } from 'react-router'

const Home = dynamic<any>(() => import('./Home').then((mod) => mod.Home))

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={Home} />
  </Switch>
)
