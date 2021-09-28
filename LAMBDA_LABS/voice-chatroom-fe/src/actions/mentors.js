import { axiosWithAuth } from "../components/utils/axiosWithAuth";

export const FETCH_MENTOR_REQUEST = "FETCH_MENTOR_REQUEST";
export const FETCH_MENTOR_SUCCESS = "FETCH_MENTOR_SUCCESS";
export const FETCH_MENTOR_FAILURE = "FETCH_MENTOR_FAILURE";

export const FETCH_ALL_REQUEST = "FETCH_ALL_USERS_REQUEST";
export const FETCH_ALL_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_ALL_FAILURE = "FETCH_ALL_USERS_FAILURE";

export const ADD_MENTOR_SUCCESS = "ADD_MENTOR_SUCCESS";
export const ADD_MENTOR_FAILURE = "ADD_MENTOR_FAILURE";

export const EDIT_MENTOR_SUCCESS = "EDIT_MENTOR_SUCCESS";
export const EDIT_MENTOR_FAILURE = "EDIT_MENTOR_FAILURE";

export const DELETE_MENTOR_SUCCESS = "DELETE_MENTOR_SUCCESS";
export const DELETE_MENTOR_FAILURE = "DELETE_MENTOR_FAILURE";

export const ADD_INTERESTS_SUCCESS = "ADD_INTERESTS_SUCCESS";
export const ADD_INTERESTS_FAILURE = "ADD_INTERESTS_FAILURE";

export const SET_LOADING = "SET_LOADING";

// Dispatch functions here
export const getAllMentors = () => (dispatch) => {
  dispatch({ type: SET_LOADING });

  axiosWithAuth()
    .get(`/mentors`)
    .then((res) => {
      dispatch({ type: FETCH_MENTOR_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_MENTOR_FAILURE });
    });
};

// repeat for any functions used :)

export const getAMentor = (id) => (dispatch) => {
  dispatch({ type: SET_LOADING });

  axiosWithAuth()
    .get("/mentors")
    .then((res) => {
      let mentor = res.data.find(element => element.mentor_id === id);
      dispatch({ type: FETCH_MENTOR_SUCCESS, payload: mentor });
    })
    .catch((error) => {
      dispatch({ type: FETCH_MENTOR_FAILURE });
    });
};

export const editMentor = (id, info) => (dispatch) => {
  dispatch({ type: SET_LOADING });

  axiosWithAuth()
    .put(`/mentors/${id}`, info)
    .then((res) => {
      dispatch({ type: EDIT_MENTOR_SUCCESS, payload: res });
    })
    .catch((error) => {
      dispatch({ type: EDIT_MENTOR_FAILURE, payload: error.message });
    });
};

export const registerMentor = (newMentor, mentor_id) => (dispatch) => {
  axiosWithAuth()
    .post("/mentors/", newMentor)
    .then((res) => {
      dispatch({
        type: ADD_MENTOR_SUCCESS,
        payload: res.data,
      });
      if (res.status === 201) {
        axiosWithAuth()
          .put(`/users/${mentor_id}`, {
            isMentor: true,
          })
          .then()
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => {
      dispatch({
        type: ADD_MENTOR_FAILURE,
        payload: err,
      });
    });
};

export const actionCreators = {
  getAllMentors,
};
