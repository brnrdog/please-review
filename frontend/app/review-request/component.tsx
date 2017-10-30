import * as React from 'react';
import {
  RepoIcon,
  GitCommitIcon,
  DiffAddedIcon,
  DiffRemovedIcon,
  GitPullRequestIcon,
  EyeIcon
} from 'react-octicons'
import * as numeral from 'numeral';

import Avatar from '../avatar/component';
import ConfirmButton from '../confirm-button/component';

const styles = require('./styles');

export interface IProps {
  reviewRequest: typeof ReviewRequest;
  onCloseReviewRequest: () => void;
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

export default ({ reviewRequest, onCloseReviewRequest }: IProps) => (
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
                <a href={reviewRequest.repositoryUrl} target="_blank">
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
                <strong>{reviewRequest.reviews}</strong>
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
                <strong>{reviewRequest.commits}</strong>
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
                  +{numeral(reviewRequest.additions).format(0,0)}
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
                  -{numeral(reviewRequest.deletions).format(0,0)}
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
                <Avatar url={reviewRequest.user.avatarUrl} />
              </div>
              <div className="col-auto">
                <div className={styles['data-group']}>
                  <label className={`text-muted`}>
                    Requested by
                  </label>
                  <span>
                    <a href={"https://avatars0.githubusercontent.com/u/670325"} target="_blank">
                      {reviewRequest.user.username}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                Repository Languages
              </label>
              <span>
                {reviewRequest.languages.split(',').map((language, index) => {
                  const type = index < 3 ? 'primary' : 'secondary'
                  const classes = `badge badge-pill badge-${type}`;

                  return (
                    <span className={`${styles['language']} ${classes}`}>
                      {language}
                    </span>
                  );
                  })}
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
        onConfirm={onCloseReviewRequest}
        modalKey={`rr-confirm-${reviewRequest.id}`}
      >
        Close Review Request
      </ConfirmButton>
      <a
        href={reviewRequest.reviewUrl}
        target="_blank"
        className="btn btn-primary btn-sm"
      >
        Review Pull Request
      </a>
    </div>
  </div>
)
