import React, { Component } from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const styles = require('./Header.sass');
    return (
      <header className={styles.header}>
        Header
      </header>
    );
  }

}
