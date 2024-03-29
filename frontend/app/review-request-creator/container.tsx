import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action, ActionCreator } from "redux";

import Component from './component';
import * as module from '../redux/modules/review-requests';

interface IProps {
  fetchRepositories: ActionCreator<Action>,
};

class Container extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.handleCreateReviewRequest = this.handleCreateReviewRequest.bind(this);
  }

  handleCreateReviewRequest() {
    this.props.createReviewRequest(
      this.props.repository,
      this.props.pullRequest,
    );
  }

  render() {
    return <Component
      {...this.props}
      onCreateReviewRequest={this.handleCreateReviewRequest}
    />
  }
}

const mapStateToProps = state => state.github;

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators<any>(module, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
