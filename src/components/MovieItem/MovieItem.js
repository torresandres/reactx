import React, { Component, PropTypes } from 'react';

export default class MovieItem extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const styles = require('./MovieItem.sass');
    const movie = this.props.movie;
    const srcset = [
      movie.medium_cover_image + ' 230w',
      movie.large_cover_image + ' 500w',
    ];

    return (
      <div className={styles.movie}>
        <img className={styles.cover} src={movie.medium_cover_image} srcSet={srcset} alt={movie.title_long} />
      </div>
    );
  }

}
