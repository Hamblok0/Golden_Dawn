import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Spread from "./components/Spread";
import DictMenu from "./components/DictMenu";
import Dictionary from "./components/Dictionary";
import ReadHistory from "./components/ReadHistory";

const App = () => {
  return (
    <div className="main">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/goldendawn" component={Spread} />
          <Route path="/dictionary" component={DictMenu} />
          <Route path="/archive" component={ReadHistory} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
