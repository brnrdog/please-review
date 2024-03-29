import * as React from 'react';
import { Link } from "react-router-dom";

import ReviewRequests from '../review-requests/container';
import ReviewRequestCreator from '../review-request-creator/container';

export default () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-4 mb-4">
        <ReviewRequestCreator />
      </div>
      <div className="col-12 col-md-8">
        <ReviewRequests />
      </div>
    </div>
  </div>
)
