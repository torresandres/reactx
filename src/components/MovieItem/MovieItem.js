import React, { Component, PropTypes } from 'react';

export default class MovieItem extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired,
    details: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  details(movie) {
    this.props.details(movie);
  }

  render() {
    const styles = require('./MovieItem.sass');
    const movie = this.props.movie;
    const srcset = [
      movie.medium_cover_image + ' 230w',
      movie.large_cover_image + ' 500w',
    ];

    return (
      <div className={styles.movie} onClick={() => this.details(movie)}>
        <img className={styles.cover} src={movie.medium_cover_image} srcSet={srcset} alt={movie.title_long} />
      </div>
    );
  }

}
