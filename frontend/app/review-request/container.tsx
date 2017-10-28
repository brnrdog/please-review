import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Component from './component';
import * as module from '../redux/modules/review-requests';

export interface IProps {
  reviewRequest: typeof ReviewRequest;
  closeReviewRequest: any;
}

class Container extends React.Component<IProps, IProps> {
  constructor(props: IProps) {
    super(props);

    this.handleCloseReviewRequest = this.handleCloseReviewRequest.bind(this)
  }

  handleCloseReviewRequest() {
    this.props.closeReviewRequest(this.props.reviewRequest.id)
  }

  render() {
    return <Component
      reviewRequest={this.props.reviewRequest}
      onCloseReviewRequest={this.handleCloseReviewRequest}
    />;
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators<any>(module, dispatch),
});

export default connect((mapStateToProps), mapDispatchToProps)(Container);
