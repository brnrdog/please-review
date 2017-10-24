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
    this.handlePullRequestChange = this.handlePullRequestChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.repository !== this.props.repository) {
      this.props.fetchPullRequests();
    }
  }

  handlePullRequestChange(e) {
    this.props.selectPullRequest(e.target.value);
  }

  render() {
    return <Component
      {...this.props}
      onPullRequestChange={this.handlePullRequestChange}
    />
  }
}

const mapStateToProps = state => state.github;

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators<any>(module, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
