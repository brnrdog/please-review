import { createStore, combineReducers, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import reducers from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

export default createStore(
  reducers,
  applyMiddleware(thunk, middleware, logger),
);
