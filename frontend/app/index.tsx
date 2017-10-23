import * as React from 'react';
import { Provider } from "react-redux";
import Routes from './routes/index';

import Navbar from '../app/navbar/container';
import store from './redux/store';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default Application;
