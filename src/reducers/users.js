import types from "./types";
import { users } from "../api";

// Initial state
const initialState = () => ({
  users: [],
  selectedUser: null
});

// Users reducer
const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case types.REQUEST_USERS:
      return initialState();
    case types.RECEIVE_USERS:
      return { users: action.users, selectedUser: action.users[0] || null };
    case types.SELECT_USER:
      return { ...state, selectedUser: action.user };
    default:
      return state;
  }
};

export default reducer;

// Actions
export const actions = {
  get: () => async dispatch => {
    dispatch({ type: types.REQUEST_USERS });
    dispatch({ type: types.RECEIVE_USERS, users: await users() });
  },
  selectUser: user => ({ type: types.SELECT_USER, user })
};
