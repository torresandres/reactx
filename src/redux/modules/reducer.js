import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import movies from './movies';

export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  movies
});
