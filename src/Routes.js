import React from "react";
import { Switch, Redirect, Route } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeVIew,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/home"
        component={HomeVIew}
      />
      <Route path="/" exact component={HomeVIew} />
      <Redirect
        to="/not-found"
      />
    </Switch>
  );
}

export default Routes;
