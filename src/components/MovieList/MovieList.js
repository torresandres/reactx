import React, { Component, PropTypes } from 'react';
import { MovieItem } from 'components';

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
      <section className={styles.list}>
        {this.props.movies.map((movie, key) =>
            <MovieItem key={key} movie={movie} />
        )}
      </section>
    );
  }

}
