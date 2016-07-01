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

    return (
      <div className={styles.container}>
        <span className={styles.title}>{movie.title}</span>
      </div>
    );
  }

}
