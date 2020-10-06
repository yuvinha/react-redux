import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  /**
   * Original
   */
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  /**
   * Optional Using Chain method in the Lodash library
   */
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

/**
 * Original
 */
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

/**
 * Memoize(Lodash) Solution
 */

// export const fetchUser = function (id) {
//   return function (dispatch) {
//     _fetchUser(id, dispatch);
//   };
// };
// const _fetchUser = _.memoize(async function (id, dispatch) {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
