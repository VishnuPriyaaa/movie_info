import { combineReducers } from 'redux';

import * as movies from './moviesReducer';

export default combineReducers({
  ...movies
});