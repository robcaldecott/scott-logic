import types from "./types";
import { todos } from "../api";

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_USERS:
    case types.SELECT_USER:
      return [];
    case types.RECEIVE_TODOS:
      return action.todos;
    default:
      return state;
  }
};

export default reducer;

export const actions = {
  get: userId => async dispatch => {
    dispatch({ type: types.REQUEST_TODOS });
    dispatch({ type: types.RECEIVE_TODOS, todos: await todos(userId) });
  }
};
