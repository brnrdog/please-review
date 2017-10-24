import * as React from "react";
import { Link } from "react-router-dom";

import Avatar from '../avatar/component';

export default (props) => (
  <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark mb-5">
    <div className="container">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Please Review</span>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbar-collapse">
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
    </div>
  </nav>
);
