const SEARCH = 'app/movies/SEARCH';
const SEARCH_SUCCESS = 'app/movies/SEARCH_SUCCESS';
const SEARCH_FAIL = 'app/movies/SEARCH_FAIL';

const initialState = {
  loading: false,
  movies: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        loading: true,
        movies: []
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.result.data.movies
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
