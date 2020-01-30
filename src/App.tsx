import React from "react";
import "./App.css";
import { Component2 } from "./Component2";
import { Component1 } from "./Component1";

const App: React.FC = () => {
  return (
    <div className="App">
      <Component1 />
      <Component2 />
    </div>
  );
};

export default App;
