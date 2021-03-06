import React, { Component, PropTypes } from 'react';

export default class MovieItem extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired,
    details: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  goBack() {
    this.props.details(null);
  }

  render() {
    const styles = require('./MovieDetails.sass');
    const movie = this.props.movie;
    const background = {backgroundImage: 'url(' + movie.background_image + ')'};

    return (
      <div className={styles.details} style={background}>
        <h1>{movie.title_long}</h1>
        <button onClick={() => this.goBack()}>Back</button>
      </div>
    );
  }

}
