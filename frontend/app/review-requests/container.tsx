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
  render() {
    return <Component
      {...this.props}
    />
  }
}

const mapStateToProps = state => state.reviewRequests;

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators<any>(module, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
