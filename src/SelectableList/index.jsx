import React, { Component } from "react";
import t from "prop-types";
import { defaultProps } from "recompose";

export const withDefaultProps = defaultProps({
  height: 400,
  title: "Select",
  width: 600
});

class SelectableList extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    height: t.number,
    title: t.string,
    weight: t.number
  };
  render() {
    let { title } = this.props;
    return <div></div>;
  }
}

export default SelectableList;
