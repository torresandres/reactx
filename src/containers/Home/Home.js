import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Header } from 'components';

export default class Home extends Component {

  render() {
    const styles = require('./Home.sass');

    return (
      <div className={styles.container}>
        <Helmet title="Homepage"/>
        <Header />
        <main>
          Homepage
        </main>
      </div>
    );
  }

}
