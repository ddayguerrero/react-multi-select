// @flow
import React, { Component } from "react";
import { render } from "react-dom";

type Props = {
  title: string
}
class Header extends Component {

  render() {
    let { title } = this.props;
    return <div> {title} </div>;
  }
}
export default Header;
