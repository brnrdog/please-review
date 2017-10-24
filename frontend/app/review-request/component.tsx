import * as React from 'react';
import {
  RepoIcon,
  GitCommitIcon,
  DiffAddedIcon,
  DiffRemovedIcon,
  GitPullRequestIcon,
  EyeIcon
} from 'react-octicons'

import Avatar from '../avatar/component';
import ConfirmButton from '../confirm-button/component';

const styles = require('./styles');

export interface ReviewRequestProps {
  reviewRequest: typeof ReviewRequest;
}

const mapReviewersToLinks = rs => rs.map(r => (
  <a
    key={r.username}
    target="_blank"
    className={styles['reviewer-link']}
    href={r.profileUrl}
  >
    {r.username}
  </a>
));

export default ({ reviewRequest }) => (
  <div className="card mb-4">
    <div className="card-header">
      <GitPullRequestIcon />
      {reviewRequest.title}
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div className="row">
          <div className="col-4 col-sm-auto mb-2 mb-sm-0">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                <RepoIcon />
                Repository
              </label>
              <span>
                <a href={reviewRequest.repositoryURL} target="_blank">
                  {reviewRequest.repository}
                </a>
              </span>
            </div>
          </div>
          <div className="col-4 col-sm-auto mb-2 mb-sm-0">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                <EyeIcon />
                Reviews
              </label>
              <span>
                <strong>4</strong>
              </span>
            </div>
          </div>
          <div className="col-4 col-sm-auto mb-2 mb-sm-0">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                <GitCommitIcon />
                Commits
              </label>
              <span>
                <strong>30</strong>
              </span>
            </div>
          </div>
          <div className="col-4 col-sm-auto mb-2 mb-sm-0">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                <DiffAddedIcon />
                Additions
              </label>
              <span>
                <strong className="text-success">
                  +{reviewRequest.additions}
                </strong>
              </span>
            </div>
          </div>
          <div className="col-4 col-sm-auto mb-2 mb-sm-0">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                <DiffRemovedIcon />
                Deletions
              </label>
              <span>
                <strong className="text-danger">
                  -{reviewRequest.deletions}
                </strong>
              </span>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <div className="row no-gutters">
              <div className="col-auto">
                <Avatar url={"https://github.com/brnrdog"} />
              </div>
              <div className="col-auto">
                <div className={styles['data-group']}>
                  <label className={`text-muted`}>
                    Requested by
                  </label>
                  <span>
                    <a href={"https://avatars0.githubusercontent.com/u/670325"} target="_blank">
                      brnrdog
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                Requested reviewers
              </label>
              <span>
                {mapReviewersToLinks(reviewRequest.reviewers || [])}
              </span>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                Reviewed by
              </label>
              <span>
                {mapReviewersToLinks(reviewRequest.reviewers || [])}
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div className="card-footer border-top-0 text-right">
      <ConfirmButton
        className="btn btn-secondary btn-sm mr-2"
        confirmMessage="Are you sure you want to close this request?"
        modalKey={`rr-confirm-${reviewRequest.id}`}
      >
        Close Review Request
      </ConfirmButton>
      <button className="btn btn-primary btn-sm">
        Review Pull Request
      </button>
    </div>
  </div>
)
