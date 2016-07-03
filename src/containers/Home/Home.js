import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Header, MovieList, Spinner } from 'components';
import { search } from 'redux/modules/movies';

@connect(
  state => ({
    loading: state.movies.loading,
    movies: state.movies.movies,
  }), { search }
)

export default class Home extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired
  };

  render() {
    const styles = require('./Home.sass');
    const movies = this.props.movies;
    const isLoading = this.props.loading;
    const noResults = !movies.length && !isLoading;

    return (
      <div className={styles.container}>
        <Helmet title="Homepage"/>
        <Header search={this.props.search} />

        <main className={styles.main}>
          {isLoading && <Spinner />}
          {movies.length > 0 && <MovieList movies={movies} />}
          {noResults && <h3 className={styles.noResults}>No results</h3>}
        </main>
      </div>
    );
  }

}
