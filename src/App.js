import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";
import Header from "./components/Header";
import Home from "./components/Home";
import Spread from "./components/Spread";
import DictMenu from "./components/DictMenu";
import Dictionary from "./components/Dictionary";
import ReadHistory from "./components/ReadHistory";
import { UserProvider } from "./Contexts/UserContext.js";

const App = () => {
  return (
    <div className="main">
      <Router>
        <UserProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reading" component={Spread} />
            <Route path="/dictionary" exact component={DictMenu} />
            <Route path="/dictionary/:id" component={Dictionary} />
            <Route path="/archive" exact component={ReadHistory} />
            <Route
              path="/archive/:id"
              render={(props) => <Spread {...props} />}
            />
          </Switch>
        </UserProvider>
      </Router>
    </div>
  );
};

export default App;
