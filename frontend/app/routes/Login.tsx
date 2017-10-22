import * as React from 'react';

const Login = () => (
  <div className="container">
    <div className="row justify-content-sm-center mt-5">
      <div className="col-12 col-sm-8 col-md-4">
        <form className="form-signin">
          <h2 className="mb-5">
            Please Review
          </h2>
          <h4 className="border-bottom-1">
            Welcome
          </h4>
          <p className="lead mb-4">To continue, please sign in with your GitHub account.</p>
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Sign in with GitHub
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
