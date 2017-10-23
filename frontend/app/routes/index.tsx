import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Home from './Home';
import ReviewRequests from './ReviewRequests';
import Login from './Login';
import Navbar from '../navbar/container';
import currentUser from "../services/current-user";
import store from '../redux/store';

const history = createHistory();

export default () => {
  const onLoginPage = window.location.pathname === '/login';
  return (
    <ConnectedRouter history={history}>
      <div>
        {!onLoginPage && <Navbar />}
        <div className="container">
          {!currentUser() && !onLoginPage && <Redirect to="/login" />}
          <Route exact path="/" component={Home} />
          <Route exact path="/review-requests" component={ReviewRequests} />
          <Route exact path="/login" component={Login} />
        </div>
      </div>
    </ConnectedRouter>
  )
};
