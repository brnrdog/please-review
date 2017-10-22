import * as React from 'react';
import Avatar from '../avatar/component';

const styles = require('./styles');

export interface ReviewRequestProps {
  reviewRequest: typeof ReviewRequest;
}

const mapReviewersToLinks = rs => rs.map(r => <a className={styles['reviewer-link']} href={r.profileURL}>{r.username}</a>);

export default (props: ReviewRequestProps) => (
  <div className="card mb-4">
    <div className="card-header">
      {props.reviewRequest.title}
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                Repository
              </label>
              <span>
                <a href={props.reviewRequest.repositoryURL} target="_blank">
                  {props.reviewRequest.repository}
                </a>
              </span>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                Commits
              </label>
              <span>
                <strong>30</strong>
              </span>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                Additions
              </label>
              <span>
                <strong className="text-success">
                  +3,753
                </strong>
              </span>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                Deletions
              </label>
              <span>
                <strong className="text-danger">
                  -978
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
                <Avatar url={props.reviewRequest.user.avatarURL} />
              </div>
              <div className="col-auto">
                <div className={styles['data-group']}>
                  <label className={`text-muted`}>
                    Requested by
                  </label>
                  <span>
                    <a href={props.reviewRequest.user.profileURL} target="_blank">
                      {props.reviewRequest.user.username}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                Reviewed by
              </label>
              <span>
                {mapReviewersToLinks(props.reviewRequest.reviewers)}
              </span>
            </div>
          </div>
          <div className="col">
            <div className={styles['data-group']}>
              <label className={`text-muted`}>
                Requested reviewers
              </label>
              <span>
                {mapReviewersToLinks(props.reviewRequest.reviewers)}
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
)
