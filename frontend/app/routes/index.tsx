import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './Home';
import ReviewRequests from './ReviewRequests';
import Login from './Login';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/review-requests" component={ReviewRequests} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
);
