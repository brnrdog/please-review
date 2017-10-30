import * as React from 'react';
import ReviewRequest from '../review-request/container';

const mapReviewRequestToComponents = rrs => (
  rrs.map(rr => <ReviewRequest key={rr.id} reviewRequest={rr} />)
);

export default ({ reviewRequests }) => (
  <section>
    {reviewRequests.length === 0 &&
      <div className="alert alert-secondary text-center text-muted" role="alert">
        There are no registered review requests.
      </div>
    }
    {mapReviewRequestToComponents(reviewRequests || [])}
  </section>
)
