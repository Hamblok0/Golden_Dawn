import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Spread from "./components/Spread";
import DictMenu from "./components/DictMenu";
import Dictionary from "./components/Dictionary";
import ReadHistory from "./components/ReadHistory";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Spread />
    </div>
  );
};

export default App;
