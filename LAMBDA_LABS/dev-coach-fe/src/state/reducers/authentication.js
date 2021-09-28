import * as types from '../actions/actionTypes';

const initialState = {
  user: null,
  loginError: '',
  signUpError: '',
  isLoading: false,
  isLoggedIn: false,
  welcomeMessage: '',
  userHasChosenRole: false,
  userRoleError: '',
  userUpdated: false,
  userUpdatedViaEmail: '',
  userUpdateError: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ROLE_ID_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.SET_ROLE_ID:
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          role_id: action.payload,
        },
      };
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        loginError: '',
        signUpError: '',
        welcomeMessage: '',
      };
    case types.LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
        welcomeMessage: action.message,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    case types.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGN_UP_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    case types.USER_ROLE_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_ROLE_CHOSEN:
      return {
        ...state,
        userHasChosenRole: true,
        isLoading: false,
        user: {
          ...state.user,
          role_id: state.user.role_id,
        },
      };
    case types.USER_ROLE_ERROR:
      return {
        ...state,
        userRoleError: action.error,
      };
    case types.SET_COACH_ID:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.id,
        },
        isLoggedIn: true,
      };
    case types.SET_STUDENT_ID:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.id,
        },
        isLoggedIn: true,
      };
    case types.UPDATE_PASSWORD_VIA_EMAIL_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_PASSWORD_VIA_EMAIL_SUCCESSFUL:
      return {
        ...state,
        userUpdatedViaEmail: action.payload,
      };
    case types.UPDATE_PASSWORD_VIA_EMAIL_FAILED:
      return {
        ...state,
        userUpdatedError: action.error,
      };
    case types.USER_INFO_UPDATE:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_INFO_UPDATE_SUCCESSFUL:
      const copyPayload = { ...action.payload };
      delete copyPayload.id;
      delete copyPayload.password;

      return {
        ...state,
        userUpdated: true,
        user: { id: state.user.id, ...copyPayload },
      };
    case types.USER_INFO_UPDATE_FAILED:
      return {
        ...state,
        isLoading: false,
        userUpdateError: action.payload,
      };
    case types.FECTH_USER_SUCCESSFULLY:
      return {
        ...state,
        user: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
}

export default userReducer;
