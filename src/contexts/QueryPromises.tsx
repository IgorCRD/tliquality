import React from 'react'

export const QueryPromisesContext = React.createContext<Array<
  Promise<any>
> | null>(null)
