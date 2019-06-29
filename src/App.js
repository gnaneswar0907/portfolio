import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import About from "./About";
import { Test } from "./test";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" exact component={About} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
