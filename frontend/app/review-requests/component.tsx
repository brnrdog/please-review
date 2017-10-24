import * as React from 'react';
import ReviewRequest from '../review-request/component';

const mapReviewRequestToComponents = rrs => (
  rrs.map(rr => <ReviewRequest key={rr.id} reviewRequest={rr} />)
);

export default ({ reviewRequests }) => (
  <section>
    {mapReviewRequestToComponents(reviewRequests || [])}
  </section>
)
