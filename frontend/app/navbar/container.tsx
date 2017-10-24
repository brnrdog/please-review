import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";

import destroyUserCookie from "../services/destroy-user-cookie";
import * as module from "../redux/modules/session";

import Component from './component';

class Container extends React.Component<any, module.State> {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.deleteSession();
  }

  render() {
    return <Component {...this.props.user} onLogout={this.handleLogout}/>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators<any>(module, dispatch),
});

const mapStateToProps = (state: any) => state.session;

export default connect(mapStateToProps, mapDispatchToProps)(Container);
