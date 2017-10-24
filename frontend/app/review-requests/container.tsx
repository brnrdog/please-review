import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Action, ActionCreator } from "redux";

import Component from './component';
import * as module from '../redux/modules/review-requests';

class Container extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviewRequests();
  }

  render() {
    return <Component {...this.props} />;
  }
}

const mapStateToProps = state => state.reviewRequests;

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators<any>(module, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
