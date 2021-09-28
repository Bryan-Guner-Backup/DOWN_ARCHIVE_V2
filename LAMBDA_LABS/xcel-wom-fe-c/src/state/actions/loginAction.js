const FORM_SUBMITTED = 'FORM_SUBMITTED';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';

const loginAction = () => {
  return dispatch => {
    dispatch({ type: FORM_SUBMITTED });
  };
};

const loginSuccess = token => {
  return dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  };
};

const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
  };
};

export { loginAction, loginSuccess, logout };
