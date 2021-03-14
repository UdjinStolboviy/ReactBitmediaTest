import React from "react";

import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import MainSite from "../mainsite";

import Users from "../users";

import Charts from "../charts";

import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainSite} />
        <Route path="/statistics" component={Users} />
        <Route path="/charts" component={Charts} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
