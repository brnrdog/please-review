import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as reducers from './modules/index';

export default combineReducers({
  ...reducers,
  router: routerReducer,
});
