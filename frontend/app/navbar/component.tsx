import * as React from "react";
import { Link } from "react-router-dom";

import Avatar from '../avatar/component';

export default (props) => (
  <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark mb-5">
    <div className="container">
      <span className="navbar-brand mb-0 h1">Please Review</span>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/review-requests" className="nav-link">
            Review Requests
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active text-light">
          <span className="nav-link">
            <Avatar url={props.avatarUrl} />
            Welcome, {props.username}
          </span>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link" onClick={props.onLogout}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
