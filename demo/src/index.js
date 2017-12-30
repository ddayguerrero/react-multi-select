import React, { Component } from "react";
import { render } from "react-dom";

import ReactSelectableList from "../../src/index";

const Demo = () => (
  <div>
    <h1>react-selectable-list Demo</h1>
    <ReactSelectableList />
  </div>
);

render(<Demo />, document.querySelector("#demo"));
