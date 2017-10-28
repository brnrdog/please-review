import * as React from 'react';

const mapRepositoriesToOptions = repositories => (
  repositories.map(repository => (
    <option key={repository} value={repository}>{repository}</option>
  ))
);

export default ({ repositories, onRepositoryChange }) => {
  const prompt = repositories.length > 0 ? 'Choose one' : 'Loading...';

  return (
    <div>
      <select
        onChange={onRepositoryChange}
        className="form-control"
        disabled={repositories.length === 0}
        defaultValue={prompt}
      >
        <option value={prompt} disabled>
          {prompt}
        </option>
        {mapRepositoriesToOptions(repositories)}
      </select>
    </div>
  );
}
