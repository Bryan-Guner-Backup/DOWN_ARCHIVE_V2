import {
  GET_GRANTS_START,
  GET_GRANTS_SUCCESS,
  GET_GRANTS_FAILURE,
  GET_APPLICANT_GRANTS_START,
  GET_APPLICANT_GRANTS_SUCCESS,
  GET_APPLICANT_GRANTS_FAILURE,
  POST_GRANTS_START,
  POST_GRANTS_SUCCESS,
  POST_GRANTS_FAILURE,
  PUT_GRANTS_START,
  PUT_GRANTS_SUCCESS,
  PUT_GRANTS_FAILURE,
  DELETE_GRANTS_START,
  DELETE_GRANTS_SUCCESS,
  DELETE_GRANTS_FAILURE,
} from "../actions/grantsActions.js";

import {
  FAVORITE_POST_SUCCESS,
  FAVORITE_DELETE_SUCCESS,
} from "../actions/favoritesActions";

const initialState = {
  grants: [],
  applicantGrants: [],
  isLoading: false,
  error: undefined,
};

const grantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GRANTS_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case GET_GRANTS_SUCCESS:
      return {
        ...state,
        error: "",
        grants: action.payload.map((grant) => {
          return { ...grant, writer_favorite: false };
        }),
        isLoading: false,
      };
    case GET_GRANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case GET_APPLICANT_GRANTS_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case GET_APPLICANT_GRANTS_SUCCESS:
      return {
        ...state,
        error: "",
        applicantGrants: action.payload.profile.grants,
        isLoading: false,
      };
    case GET_APPLICANT_GRANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case POST_GRANTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case POST_GRANTS_SUCCESS:
      return {
        ...state,
        applicantGrants: [
          ...state.applicantGrants,
          { ...action.payload, writer_favorite: false },
        ],
        isLoading: false,
      };
    case FAVORITE_POST_SUCCESS:
      return {
        ...state,
        grants: state.grants.map((grant) => {
          if (grant.id === action.payload.id) {
            return { ...action.payload, writer_favorite: true };
          } else {
            return grant;
          }
        }),
        isLoading: false,
      };
    case FAVORITE_DELETE_SUCCESS:
      return {
        ...state,
        grants: state.grants.map((grant) => {
          if (grant.id === action.payload.id) {
            return { ...action.payload, writer_favorite: false };
          } else {
            return grant;
          }
        }),
        isLoading: false,
      };
    case POST_GRANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case PUT_GRANTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case PUT_GRANTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case PUT_GRANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case DELETE_GRANTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_GRANTS_SUCCESS:
      return {
        ...state,
        applicantGrants: state.applicantGrants.filter(
          (grant) => grant.id !== action.payload
        ),
        isLoading: false,
      };

    case DELETE_GRANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default grantsReducer;
