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
  title: string
};

class MultiSelectList extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { title } = this.props;
    return (
      <div className={styles.list.root}>
        <Header title={title} />
        <ItemList />
        <Footer />
      </div>
    );
  }
}

export default MultiSelectList;
