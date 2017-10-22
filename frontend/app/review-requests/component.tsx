import * as React from 'react';
import ReviewRequest from '../review-request/component';
import reviewRequests from '../../fixtures/review-requests';

const mapReviewRequestToComponents = rrs => (
  rrs.map(rr => <ReviewRequest key={rr.id} reviewRequest={rr} />)
);

export default () => (
  <section>
    {mapReviewRequestToComponents(reviewRequests)}
  </section>
)
