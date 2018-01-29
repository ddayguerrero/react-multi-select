// @flow
import React, { Component } from "react";
import { render } from "react-dom";
import MultiSelectList from "../../src/MultiSelectList";
import "../../styles.css";

const items: Array<Item> = [
  { label: "Item1", value: "1" },
  { label: "Item2", value: "2" }
];

const onSelect = (selected) => {
  console.log("selected", selected);
};

const Demo = () => (
  <div>
    <MultiSelectList title="NBA Roster" items={items} onSelect={onSelect} />
  </div>
);

render(<Demo />, document.querySelector("#demo"));
