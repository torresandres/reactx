import React, { Component } from 'react';

export default class Icon extends Component {

  render() {
    const styles = require('./Spinner.sass');
    const size = 64;

    return (
      <svg
        className={styles.spinner}
        width={size + 'px'}
        height={size + 'px'}
        viewBox={[0, 0, size, size].join(' ')}>

        <circle
          className={styles.path}
          fill="none"
          strokeWidth={size / 10}
          strokeLinecap="round"
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - size / 20}>
        </circle>
      </svg>
    );
  }
}
