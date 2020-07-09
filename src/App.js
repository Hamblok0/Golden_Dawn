import React, { useState, useEffect } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cookie from "js-cookie";
import Header from "./components/Header";
import Home from "./components/Home";
import Spread from "./components/Spread";
import DictMenu from "./components/DictMenu";
import Dictionary from "./components/Dictionary";
import ReadHistory from "./components/ReadHistory";

const App = () => {
  const [user, setUser] = useState(Cookie.get("tarot.io"));

  useEffect(() => {
    if (user && !Cookie.get("tarot.io")) {
      Cookie.set("tarot.io", user);
    }
    if (!user && Cookie.get("tarot.io")) {
      Cookie.remove("tarot.io")
    }
  }, [user])

  return (
    <div className="main">
      <Router>
        <Header user={user} setUser={setUser}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reading" render={(props) => (<Spread {...props} user={user} />)} />
          <Route path="/dictionary" exact component={DictMenu} />
          <Route path="/dictionary/:id" component={Dictionary} />
          <Route path="/archive" render={(props) =>  user ? (<ReadHistory {...props} user={user} />) : (<Redirect to={{pathname: "/"}}/>)} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
