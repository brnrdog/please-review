import * as React from 'react';
import Spinner from 'react-spinkit';

export default ({ loading, text, type }) => (
  <button className={`btn ${type}`}>
    {loading &&
      <span>
        <Spinner name="circle" color="white"/>
        {text}
      </span>
    }
  </button>
);
