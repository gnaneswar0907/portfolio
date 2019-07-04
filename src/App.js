import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
