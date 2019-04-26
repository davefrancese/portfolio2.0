import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Web from "./components/Web";
import Graphics from "./components/Graphics";
import ProjectTemplate from "./components/ProjectTemplate";

import { Projects } from "./PROJECTS";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/webdevelopment" component={Web} />
          <Route exact path="/graphicdesign" component={Graphics} />
          <Route
            exact
            path="/:id"
            render={props => <ProjectTemplate {...props} projects={Projects} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
