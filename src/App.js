import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/portfolio/about" exact component={About} />
        <Route path="/portfolio/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
