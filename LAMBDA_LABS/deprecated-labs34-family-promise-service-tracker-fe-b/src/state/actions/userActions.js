import { axiosWithAuth } from '../../utils/axiosWithAuth';

// USER ACTION TYPES

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';
export const GET_USER_RESOLVE = 'GET_USER_RESOLVE';

export const EDIT_USER_START = 'EDIT_USER_START';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAIL = 'EDIT_USER_FAIL';
export const EDIT_USER_RESOLVE = 'EDIT_USER_RESOLVE';

// USER ACTIONS

// GET user by userid
export const getUserAction = userId => dispatch => {
  dispatch({ type: GET_USER_START });

  axiosWithAuth()
    .get(`/api/profiles/${userId}`)
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_USER_RESOLVE });
    });
};

// UPDATE user by userid
export const updateUserAction = (userId, userObj) => dispatch => {
  dispatch({ type: EDIT_USER_START });

  axiosWithAuth()
    .put(`/api/profiles/${userId}`, userObj)
    .then(res => {
      console.log('what is sent in action', userObj);
      dispatch({ type: EDIT_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_USER_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: EDIT_USER_RESOLVE });
    });
};
