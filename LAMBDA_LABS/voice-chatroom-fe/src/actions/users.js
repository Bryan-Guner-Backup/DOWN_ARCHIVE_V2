import { axiosWithAuth } from "../components/utils/axiosWithAuth"

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const FETCH_ALL_REQUEST = "FETCH_ALL_USERS_REQUEST";
export const FETCH_ALL_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_ALL_FAILURE = "FETCH_ALL_USERS_FAILURE";

export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const ADD_INTERESTS_SUCCESS = "ADD_INTERESTS_SUCCESS";
export const ADD_INTERESTS_FAILURE = "ADD_INTERESTS_FAILURE";

export const SET_LOADING = "SET_LOADING";

// Dispatch functions here
export const getAllUsers = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_REQUEST });

  axiosWithAuth()
    .get(`/users`)
    .then((res) => {
      dispatch({ type: FETCH_ALL_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_ALL_FAILURE });
    });
};

export const editUser = (id, info) => (dispatch) => {
  dispatch({ type: SET_LOADING });

  axiosWithAuth()
    .put(`/users/${id}`, info)
    .then((res) => {
      dispatch({ type: EDIT_USER_SUCCESS, payload: res });
    })
    .catch((error) => {
      dispatch({ type: EDIT_USER_FAILURE, payload: error.message });
    });
};

// repeat for any functions used :)

export const actionCreators = {
  getAllUsers,
  editUser
};
