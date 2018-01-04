import React, { Component } from "react";
import { render } from "react-dom";
import SelectableList from "../../src/SelectableList";
import "../../styles.css";

const Demo = () => (
  <div>
    <h1>react-selectable-list</h1>
    <SelectableList title="NBA Roster" />
  </div>
);

render(<Demo />, document.querySelector("#demo"));
