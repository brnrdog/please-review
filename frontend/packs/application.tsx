import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

import * as React from "react";
import * as ReactDOM from "react-dom";

import App from '../app';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
