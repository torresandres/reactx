import React, { Component, PropTypes } from 'react';

export default class MovieList extends Component {

  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const styles = require('./MovieList.sass');

    return (
      <section className={styles.container}>
        {this.props.movies.map((movie, key) => {
          return (
            <p key={key}>{movie.title}</p>
          );
        })}
      </section>
    );
  }

}
