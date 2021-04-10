import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
