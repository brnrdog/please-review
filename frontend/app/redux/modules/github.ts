import { Action, AnyAction, ActionCreator } from "redux";
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

const FETCH_REPOSITORIES = 'please-review/github/FETCH_REPOSITORIES';
const FETCH_PULL_REQUESTS = 'please-review/github/FETCH_PULL_REQUESTS';
const SELECT_REPOSITORY = 'please-review/github/SELECT_REPOSITORY';
const SELECT_PULL_REQUEST = 'please-review/github/SELECT_PULL_REQUEST';

export interface State {
  readonly pullRequests: string[];
  readonly repositories: string[];
  readonly repository?: string;
  readonly pullRequest?: string;
}

const initState = {
  repositories: [],
  pullRequests: [],
  repository: null,
  pullRequest: null,
};

export default function (state: State = initState, action: AnyAction) : State {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return { ...state, repositories: action.payload };
    case FETCH_PULL_REQUESTS:
      return { ...state, pullRequests: action.payload };
    case SELECT_REPOSITORY:
      return { ...state, repository: action.payload };
    case SELECT_PULL_REQUEST:
      return { ...state, pullRequest: action.payload };
    default:
      return state;
  }
}

export const fetchRepositories :
ThunkAction<any, State, null> = () => {
  return dispatch => {
    axios
      .get('/api/v1/github/repositories')
      .then(response => {
        const repos = response.data.map(repo => repo['full_name']);
        dispatch({
          type: FETCH_REPOSITORIES,
          payload: repos,
        });
      });
  }
}

export const fetchPullRequests : ThunkAction<any, State, null> = () => {
  return (dispatch, getState) => {
    axios
      .get('/api/v1/github/pull_requests', {
        params: { repository: getState().github.repository }
      })
      .then(response => {
        dispatch({
          type: FETCH_PULL_REQUESTS,
          payload: response.data.map(pull => pull.title)
        });
      });
  }
}


export const selectRepository : ActionCreator<Action> =
  (repository: string) => {
    return {
      type: SELECT_REPOSITORY,
      payload: repository,
    };
  }

export const selectPullRequest : ActionCreator<Action> = (pull:string) => {
  return { type: SELECT_PULL_REQUEST, payload: pull };
}
