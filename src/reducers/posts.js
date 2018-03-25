import types from "./types";
import { posts, comments } from "../api";

const setComments = (posts, postId, comments) =>
  posts.map(post => {
    if (post.id === postId) {
      return { ...post, comments };
    }
    return post;
  });

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_POSTS:
    case types.SELECT_USER:
      return [];
    case types.RECEIVE_POSTS:
      return action.posts.map(post => ({
        ...post,
        toggled: false,
        comments: []
      }));
    case types.TOGGLE_POST:
      return state.map(post => {
        if (post.id === action.postId) {
          return { ...post, toggled: !post.toggled };
        }
        return post;
      });
    case types.REQUEST_COMMENTS:
      return setComments(state, action.postId, []);
    case types.RECEIVE_COMMENTS:
      return setComments(state, action.postId, action.comments);
    default:
      return state;
  }
};

export default reducer;

export const actions = {
  get: userId => async dispatch => {
    dispatch({ type: types.REQUEST_POSTS });
    dispatch({ type: types.RECEIVE_POSTS, posts: await posts(userId) });
  },
  toggle: postId => ({ type: types.TOGGLE_POST, postId }),
  loadComments: postId => async dispatch => {
    dispatch({ type: types.REQUEST_COMMENTS, postId });
    dispatch({
      type: types.RECEIVE_COMMENTS,
      postId,
      comments: await comments(postId)
    });
  }
};
