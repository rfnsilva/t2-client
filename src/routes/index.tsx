import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './private'

import Login from '../pages/login'
import Home from '../pages/home'

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes
