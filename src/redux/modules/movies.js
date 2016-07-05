const SEARCH = 'app/movies/SEARCH';
const SEARCH_SUCCESS = 'app/movies/SEARCH_SUCCESS';
const SEARCH_FAIL = 'app/movies/SEARCH_FAIL';
const DETAILS_TOGGLE = 'app/movies/DETAILS_TOGGLE';

const initialState = {
  loading: false,
  movies: [],
  movie: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DETAILS_TOGGLE:
      return {
        ...state,
        movie: action.movie
      };

    case SEARCH:
      return {
        ...state,
        loading: true,
        movies: []
      };

    case SEARCH_SUCCESS:
      const response = action.result.data;
      return {
        ...state,
        loading: false,
        movies: response.movie_count ? response.movies : []
      };

    case SEARCH_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;

  }
}

export function search(params) {
  return {
    types: [SEARCH, SEARCH_SUCCESS, SEARCH_FAIL],
    promise: client => client.get('/list_movies.json', {params: params})
  };
}

export function details(movie = null) {
  return { type: DETAILS_TOGGLE, movie };
}
