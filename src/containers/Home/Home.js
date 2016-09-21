import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Header, MovieList, MovieDetails, Spinner } from 'components';
import { search, details } from 'redux/modules/movies';

@connect(
  state => ({
    loading: state.movies.loading,
    movies: state.movies.movies,
    movie: state.movies.movie
  }), { search, details }
)

export default class Home extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired,
    details: PropTypes.func.isRequired,
    movie: PropTypes.object
  };

  render() {
    const styles = require('./Home.sass');
    const movies = this.props.movies;
    const selectedMovie = this.props.movie;
    const isLoading = this.props.loading;
    const noResults = !movies.length && !isLoading;
    const showList = !!movies.length;

    return (
      <div className={styles.container}>
        <Helmet title="Homepage"/>
        <Header search={this.props.search} />

        <main className={styles.main}>
          {/* Show spinner when loading */}
          {isLoading && <Spinner />}

          {/* Show list of movies */}
          {showList && <MovieList movies={movies} details={this.props.details} />}

          {/* Show feedback when search has no results */}
          {noResults && <h3 className={styles.noResults}>No results</h3>}

          {/* Show movie details if a movie were selected */}
          {selectedMovie && <MovieDetails movie={selectedMovie} details={this.props.details} />}
        </main>
      </div>
    );
  }

}
