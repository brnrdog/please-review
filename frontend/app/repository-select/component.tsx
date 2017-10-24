import * as React from 'react';

const mapRepositoriesToOptions = repositories => (
  repositories.map(repository => (
    <option key={repository} value={repository}>{repository}</option>
  ))
);

export default ({ repositories, onRepositoryChange }) => (
  <div>
    <select
      onChange={onRepositoryChange}
      className="form-control"
      disabled={repositories.length === 0}
    >
      {mapRepositoriesToOptions(repositories)}
    </select>
  </div>
)
