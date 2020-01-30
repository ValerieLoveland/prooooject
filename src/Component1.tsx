import * as React from "react";
import { useState } from "react";
import { Component2 } from "./Component2";

//unsolved mysteries string is kept in state use state hook with react for functional component

export const Component1 = () => {
  const [text, setText] = useState("Robert"); //this is creating and setting the state

  return (
    <div style={{ backgroundColor: "red" }}>
      {/* this is setting state to something else when the button is clicked */}
      <button onClick={() => setText("Stack")}>click me</button>

      <p>The important message is {text}</p>
    </div>
  );
};
