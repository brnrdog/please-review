import { Action, ActionCreator } from "redux";
import destroyUserCookie from "../../services/destroy-user-cookie";

const CREATE = 'please-review/session/CREATE';
const DELETE = 'please-review/session/DELETE';

export interface State {
  readonly user?: typeof User;
}

const initState = {
  user: null
};

export default function (state: State = initState, action: Action) : State {
  switch (action.type) {
    case CREATE:
      return state;
    case DELETE:
      return { ...state, user: null };
    default:
      return state;
  }
}

export const createSession : ActionCreator<Action> = () => {
  return { type: CREATE };
};
export const deleteSession : ActionCreator<Action> = () => {
  destroyUserCookie();
  return { type: DELETE };
};
