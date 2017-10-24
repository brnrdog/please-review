import * as React from 'react';

const mapPullRequestsToOptions = prs => (
  prs.map(pr => (
    <option key={pr.number} value={pr.number}>
      {pr.title}
    </option>
  ))
);

export default ({ pullRequests, onPullRequestChange, repository }) => {
  const options = mapPullRequestsToOptions(pullRequests);
  const prompt = repository ?
    (pullRequests.length > 0 ? 'Choose Pull Request' : 'No Pull Requests')
    :
    'Select a repository first'

  return (
    <div>
      <select
        onChange={onPullRequestChange}
        className="form-control"
        disabled={pullRequests.length === 0}
      >
        {!repository &&
          <option disabled selected>Select a repository first</option>
        }
        {repository && pullRequests.length === 0 &&
          <option disabled selected>No open pull requests found</option>
        }

        {pullRequests.length > 0 &&
          <option disabled selected>Choose one</option>
        }
        {options}
      </select>
    </div>
  );
}
