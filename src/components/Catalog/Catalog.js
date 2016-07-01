import React, { Component, PropTypes } from 'react';

export default class Catalog extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const styles = require('./Catalog.sass');

    return (
      <main className={styles.catalog}>
        {this.props.loading && <h1>Loading</h1>}
        {this.props.movies.map((movie, key) => {
          return (
            <p key={key}>{movie.title}</p>
          );
        })}
      </main>
    );
  }

}
