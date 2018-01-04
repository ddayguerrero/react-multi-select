import React, { Component } from "react";
import { render } from "react-dom";
import MultiSelectList from "../../src/MultiSelectList";
import "../../styles.css";

const Demo = () => (
  <div>
    <MultiSelectList title="NBA Roster" />
  </div>
);

render(<Demo />, document.querySelector("#demo"));
