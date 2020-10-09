import React from "react"
import { Route, Switch, HashRouter } from "react-router-dom"

import LandingPage from "./LandingPage"
import About from "./About"
import Contact from "./Contact"

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </HashRouter>
  )
}

export default App
