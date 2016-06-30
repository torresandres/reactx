import React, { Component, PropTypes } from 'react';
import { Icon } from 'components';

export default class Header extends Component {

  static propTypes = {
    search: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  search = (event) => {
    event.preventDefault();
    const searchTerm = this.refs.searchTerm.value;

    this.props.search(searchTerm);
  }

  render() {
    const styles = require('./Header.sass');
    return (
      <header className={styles.header}>
        <form onSubmit={this.search}>
          <input ref="searchTerm" type="text" placeholder="Search" autoFocus />
          <button>
            <Icon name="search" size={12} />
          </button>
        </form>
      </header>
    );
  }

}
