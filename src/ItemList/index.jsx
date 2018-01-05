// @flow
import React, { Component } from 'react';

type Props = {
  items: Array<Item>
};

class ItemList extends Component<Props> {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map(item => <div key={item.value}> {item.label} </div> )}
      </div>
    )
  }
}

export default ItemList;
