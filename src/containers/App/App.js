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
    require('./App.sass');

    return (
      <div id="app">
        {this.props.children}
      </div>
    );
  }
}
