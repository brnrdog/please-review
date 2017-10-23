import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import ReviewRequests from './ReviewRequests';
import Login from './Login';
import Navbar from '../navbar/container';
import store from '../redux/store';
import currentUser from '../services/current-user';

import * as SessionModule from '../redux/modules/session';

const history = createHistory();

const IndexRoute = ({ session, router, createSession }) => {
  const onLoginPage = (router.location || {}).pathname === '/login';
  const user = currentUser();

  if (user && session.user === null) {
    createSession(user);
  }

  return (
    <ConnectedRouter history={history}>
      <div>
        {session.user && <Navbar />}
        <div className="container">
          {!session.user && !onLoginPage && <Redirect to="/login" />}
          <Route exact path="/" component={Home} />
          <Route exact path="/review-requests" component={ReviewRequests} />
          <Route exact path="/login" component={Login} />
        </div>
      </div>
    </ConnectedRouter>
  )
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators<any>(SessionModule, dispatch),
})

export default connect(state => state, mapDispatchToProps)(IndexRoute);
