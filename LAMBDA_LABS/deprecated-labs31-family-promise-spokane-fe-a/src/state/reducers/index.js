// since this reducer is still relatively short we kept it in one file
// once it starts to get longer it can be broken down into more files

import {
  LOG_IN,
  SET_LOADING,
  SET_CURRENT_USER,
  GET_FAMILY_FETCHING,
  GET_FAMILY_SUCCESS,
  GET_FAMILY_FAILURE,
  GET_HOUSEHOLD_FETCHING,
  GET_HOUSEHOLD_FAILURE,
  GET_HOUSEHOLD_SUCCESS,
  GET_MEMBERS_FETCHING,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_FAILURE,
  TOTAL_BEDS_FAILURE,
  TOTAL_BEDS_FETCHING,
  TOTAL_BEDS_SUCCESS,
  ADD_DOCUSIGN_URL,
  ADD_SIGNER_INFO,
  // Total beds at shelter
} from '../types';

const INITIAL_STATE = {
  CURRENT_USER: {},
  FAMILY: {},
  MEMBER: {},
  HOUSEHOLD: {},
  LOGGED_IN: false,
  LOADING: false,
  ERROR: '',
  TOTAL_BEDS: 60,
  DOCUSIGN_URL: '',
  SIGNER_INFO: {},
};

export const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, CURRENT_USER: action.payload };
    case LOG_IN:
      return { ...state, LOGGED_IN: true };
    case 'LOG_OUT':
      return { ...state, LOGGED_IN: false };
    case SET_LOADING:
      return { ...state, LOADING: action.payload };
    case GET_FAMILY_FETCHING:
      return { ...state, LOADING: true };
    case GET_FAMILY_FAILURE:
      return { ...state, LOADING: false, ERROR: action.payload };
    case GET_FAMILY_SUCCESS:
      return { ...state, LOADING: false, FAMILY: action.payload };
    case GET_HOUSEHOLD_FETCHING:
      return { ...state, LOADING: true };
    case GET_HOUSEHOLD_FAILURE:
      return { ...state, LOADING: false, ERROR: action.payload };
    case GET_HOUSEHOLD_SUCCESS:
      return { ...state, LOADING: false, HOUSEHOLD: action.payload };
    case GET_MEMBERS_FETCHING:
      return { ...state, LOADING: true };
    case GET_MEMBERS_SUCCESS:
      return { ...state, LOADING: false, MEMBER: action.payload };
    case GET_MEMBERS_FAILURE:
      return { ...state, LOADING: false, ERROR: action.payload };
    case TOTAL_BEDS_FETCHING:
      return { ...state, LOADING: true };
    case TOTAL_BEDS_SUCCESS:
      return { ...state, LOADING: false, TOTAL_BEDS: action.payload };
    case TOTAL_BEDS_FAILURE:
      return { ...state, LOADING: false, ERROR: action.payload };
    case ADD_DOCUSIGN_URL:
      return { ...state, DOCUSIGN_URL: action.payload };
    case ADD_SIGNER_INFO:
      return { ...state, SIGNER_INFO: action.payload };
    default:
      return state;
  }
};
