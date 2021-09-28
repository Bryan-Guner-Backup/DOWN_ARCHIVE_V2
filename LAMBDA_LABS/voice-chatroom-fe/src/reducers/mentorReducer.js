import {
  ADD_MENTOR_SUCCESS,
  ADD_MENTOR_FAILURE,
  EDIT_MENTOR_SUCCESS,
  EDIT_MENTOR_FAILURE,
  FETCH_MENTOR_FAILURE,
  FETCH_MENTOR_SUCCESS,
} from "../actions/mentors";

const initialState = {
  mentor: {},
  mentors: [],
  error: null,
};

export default function mentorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MENTOR_SUCCESS:
    case EDIT_MENTOR_SUCCESS:
      return {
        ...state,
        mentor: action.payload,
        error: null,
      };
    case ADD_MENTOR_FAILURE:
    case FETCH_MENTOR_FAILURE:
    case EDIT_MENTOR_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_MENTOR_SUCCESS:
      return {
        ...state,
        mentor: action.payload,
        mentors: action.payload,
        error: null,
      };
    default:
      return state;
  }
}
