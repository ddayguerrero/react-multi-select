// @flow
import React, { Component } from "react";
import Item from "../Item";

type Props = {
  items: Array<Item>,
  selectedItems: Set<Item>,
  onSelect: Function
};

class ItemList extends Component<Props> {
  componentWillMount = () => {
    this.selectedItems = new Set();
  };

  toggleItem = item => {
    if (this.selectedItems.has(item)) {
      this.selectedItems.delete(item);
    } else {
      this.selectedItems.add(item);
    }
    this.props.onSelect(this.selectedItems);
  };

  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map(item => (
          <Item
            key={item.value}
            type="checkbox"
            item={item}
            handleCheckboxChange={this.toggleItem}
          />
        ))}
      </div>
    );
  }
}

export default ItemList;
