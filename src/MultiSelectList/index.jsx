// @flow
import React, { Component } from 'react';
import { defaultProps } from 'recompose';

import Header from '../Header';
import Footer from '../Footer';
import ItemList from '../ItemList';

const styles = {
  list: require('./MultiSelectList.scss'),
};

export const withDefaultProps = defaultProps({
  height: 400,
  title: 'Select',
  width: 600,
});

type Props = {
  title: string,
  items: Array<Item>,
  onSelect: Function
};

class MultiSelectList extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selected: []
    };
  }

  onSelect = selected => {
    this.setState({
      selected: selected
    }, () => {
      this.props.onSelect(this.state.selected);
    });
  };

  render() {
    const { title, items } = this.props;
    return (
      <div className={styles.list.root}>
        <Header title={title} />
        <ItemList items={items} onSelect={this.onSelect}/>
        <Footer />
      </div>
    );
  }
}

export default MultiSelectList;
