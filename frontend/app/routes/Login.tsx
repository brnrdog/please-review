import * as React from 'react';
import { Redirect } from "react-router-dom";
import { MarkGithubIcon } from 'react-octicons';
import currentUser from '../services/current-user';

export interface ILoginState {
  redirected: boolean;
}

class Login extends React.Component<{}, ILoginState> {
  render() {
    return (
      <div className="container">
        {currentUser() && <Redirect to="/" />}
        <div className="row justify-content-sm-center mt-5">
          <div className="col-12 col-sm-8 col-md-4">
            <form className="form-signin">
              <h2 className="mb-5">
                Please Review
              </h2>
              <h4 className="border-bottom-1">
                Welcome
              </h4>
              <p className="lead mb-4">
                To continue, please sign in with your GitHub account.
              </p>
              <a href="/auth/github" className="btn btn-lg btn-dark btn-block" role="button">
                <MarkGithubIcon style={{ fill: 'white', marginRight: '.25em' }}/>
                Sign in with GitHub
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
