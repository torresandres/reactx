import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class NotFound extends Component {

  render() {
    const styles = require('./NotFound.sass');
    return (
      <div className={styles.container}>
        <Helmet title="Page not found"/>
        <h1>Doh! 404!</h1>
      </div>
    );
  }

}
