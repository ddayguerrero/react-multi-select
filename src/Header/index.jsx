import React, { Component } from "react";
import t from "prop-types";
import { render } from "react-dom";

class Header extends Component {
  static propTypes = {
    title: t.string
  };

  render() {
    let { title } = this.props;
    return <div> {title} </div>;
  }
}
export default Header;
