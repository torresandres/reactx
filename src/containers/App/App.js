import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { getMovies } from 'redux/modules/app';

/*
@connect(
  state => ({
    loaded: false
  })
)
*/

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    const styles = require('./App.sass');

    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}
