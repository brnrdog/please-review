import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action, ActionCreator } from "redux";

import Component from './component';
import * as module from '../redux/modules/github'

interface IProps {
  fetchRepositories: ActionCreator<Action>,
};

class Container extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.handleCreateReviewRequest = this.handleCreateReviewRequest.bind(this);
  }

  handleCreateReviewRequest() {

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
