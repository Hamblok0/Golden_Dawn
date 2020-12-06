import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SpreadMenu from "./components/SpreadMenu";
import Spread from "./components/Spread";
import DictMenu from "./components/DictMenu";
import Dictionary from "./components/Dictionary";
import ReadHistory from "./components/ReadHistory";
import { UserProvider } from "./Contexts/UserContext.js";
import { NotifyProvider } from "./Contexts/NotifyContext.js";

const App = () => {
  return (
    <div className="main">
      <Router>
        <UserProvider>
          <NotifyProvider>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/reading" exact component={SpreadMenu} />
              <Route path="/reading/:id" component={Spread} />
              <Route path="/dictionary" exact component={DictMenu} />
              <Route path="/dictionary/:id" component={Dictionary} />
              <Route path="/archive" exact component={ReadHistory} />
              <Route
                path="/archive/:id"
                render={(props) => <Spread {...props} />}
              />
            </Switch>
          </NotifyProvider>
        </UserProvider>
      </Router>
    </div>
  );
};

export default App;
