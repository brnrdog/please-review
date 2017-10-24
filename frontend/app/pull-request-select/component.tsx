import * as React from 'react';

const mapPullRequestsToOptions = prs => (
  prs.map(pr => (
    <option key={pr} value={pr}>{pr}</option>
  ))
);

export default ({ pullRequests, onPullRequestChange, repository }) => {
  const options = mapPullRequestsToOptions(pullRequests);

  return (
    <div>
      <select
        onChange={onPullRequestChange}
        className="form-control"
        disabled={pullRequests.length === 0}
      >
        {options}
      </select>
    </div>
  );
}
