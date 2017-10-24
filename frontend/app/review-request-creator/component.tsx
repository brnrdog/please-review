import * as React from 'react';

import RepositorySelect from '../repository-select/container';
import PullRequestSelect from '../pull-request-select/container';

export default ({ onCreateReviewRequest, pullRequest }) => (
  <div className="card">
    <div className="card-header">
      Select a Repository
    </div>
    <div className="card-body">
      <RepositorySelect />
    </div>
    <div
      style={{ borderTop: '1px solid #d8d8d8'}}
      className="card-header">
      Select a Pull Request:
    </div>
    <div className="card-body">
      <PullRequestSelect />
    </div>
    <div className="card-footer">
      <button
        onClick={onCreateReviewRequest}
        className="btn btn-block btn-primary"
        disabled={pullRequest === null}>
        Create Review Request
      </button>
    </div>
  </div>
)
