import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Home as HomeVIew } from "./views";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeVIew} />
      <Route path="/home" component={HomeVIew} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
