import React from "react";
import { Button } from "@material-ui/core";
import Header from "./components/fragments/Header";
import Menu from "./components/fragments/Menu";
import Portfolio from "./components/pages/Portfolio"
import mainpage from "./components/pages/mainpage"
import education from "./components/pages/education"
import socialmedia from "./components/pages/Socialmedia"
import skills from "./components/pages/skills"

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path="/main" component={mainpage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/education" component={education} />
        <Route path="/social" component={socialmedia} />
        <Route path="/skills" component={skills} />
        <Route exact={true} path="/" component={() => <Redirect to ="/main"/>} />
        <Route path="*" component={() => <Redirect to ="/main"/>} />
      </Switch>
    </Router>
  );
}
