import { Action, AnyAction, ActionCreator } from "redux";
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import * as fp from 'lodash/fp';

const CREATE = 'please-review/review-request/CREATE';
const FETCH = 'please-review/review-request/FETCH';

export interface State {
  readonly reviewRequests: typeof ReviewRequest[];
}

const initState = {
  reviewRequests: [],
};

export default function (state: State = initState, action: AnyAction) : State {
  switch (action.type) {
    case CREATE:
      const reviewRequests = fp.concat([action.payload])(state.reviewRequests);
      return { ...state, reviewRequests };
    case FETCH:
      return { ...state };
    default:
      return state;
  }
}

export const createReviewRequest : ThunkAction<any, State, null> = () => {
  return (dispatch, getState) => {
    const state = getState();
    axios.post('api/v1/review_requests', {
      pull_request: {
        repository: state.github.repository,
        number: state.github.pullRequest,
      }
    }).then(response => {
      dispatch({
        type: CREATE,
        payload: response.data,
      });
    });


  }
}
