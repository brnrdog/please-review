import * as React from 'react';
import { Link } from "react-router-dom";

import ReviewRequests from '../review-requests/component';
import RepositorySelect from '../repository-select/container';

export default () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-4">
        <RepositorySelect />
      </div>
      <div className="col-12 col-md-8">
        <ReviewRequests />

      </div>
    </div>
  </div>
)
