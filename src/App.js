
//pag madami na ang imports tapos connected sa index components
//naka export default

import React from "react";

import { Switch, Route } from 'react-router-dom'
import Local from  './components/pages/Local'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Local} />
    </Switch>
  )
}

export default App