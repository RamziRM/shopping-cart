import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/shop" component={Shop} /> */}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
