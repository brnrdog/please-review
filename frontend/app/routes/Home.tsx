import * as React from 'react';
import { Link } from "react-router-dom";

export default () => (
  <div>
    <h1>This is home page</h1>
    <Link to="/review-requests">
      review requests
    </Link>
  </div>
)
