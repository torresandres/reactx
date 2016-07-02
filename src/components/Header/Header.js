import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Icon } from 'components';

export default class Header extends Component {

  static propTypes = {
    search: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.search({
      sort_by: 'download_count'
    });
  }

  search = (event) => {
    event.preventDefault();

    this.props.search({
      query_term: escape(this.refs.searchTerm.value)
    });
    this.refs.searchForm.reset();
    this.refs.searchTerm.blur();
  }

  render() {
    const styles = require('./Header.sass');

    return (
      <header className={styles.header}>
        <form className={styles.form} ref="searchForm" onSubmit={this.search}>
          <label className={classNames(styles.button, styles.menu)}>
            <Icon className={styles.icon} name="menu" />
          </label>
          <label className={classNames(styles.button, styles.search)}>
            <input className={styles.input} ref="searchTerm" type="text" placeholder="Search" required />
            <Icon className={styles.icon} name="search" />
          </label>
        </form>
      </header>
    );
  }

}
