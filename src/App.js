import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import About from "./About";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
