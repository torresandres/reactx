import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Header } from 'components';
import { search } from 'redux/modules/movies';

@connect(
  state => ({
    loadingMovies: state.movies.loading,
    movies: state.movies.movies,
  }), { search }
)

export default class Home extends Component {

  static propTypes = {
    loadingMovies: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired
  };

  render() {
    const styles = require('./Home.sass');

    return (
      <div className={styles.container}>
        <Helmet title="Homepage"/>
        <Header search={this.props.search} />
        <main>
          {this.props.loadingMovies && <h1>Loading</h1>}
          {this.props.movies.map((movie, key) => {
            return (
              <p key={key}>{movie.title}</p>
            );
          })}
        </main>
      </div>
    );
  }

}
