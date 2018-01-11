// @flow
import React, { Component } from "react";

type Props = {
  item: Item,
  handleCheckboxChange: Function
};

class Item extends Component {
  state = {
    isSelected: (Boolean = false)
  };

  toggleItem = () => {
    const { handleCheckboxChange, item } = this.props;
    this.setState(({ isSelected }) => ({
      isSelected: !isSelected
    }));

    handleCheckboxChange(item);
  };

  render() {
    const { item } = this.props;
    const { isSelected } = this.state;
    return (
      <label>
        <input type="checkbox" value={item.value} onChange={this.toggleItem} />
        {item.label}
      </label>
    );
  }
}

export default Item;
