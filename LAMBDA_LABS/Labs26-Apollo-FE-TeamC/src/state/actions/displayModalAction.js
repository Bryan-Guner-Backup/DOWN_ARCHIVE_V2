export const TOGGLE_DISPLAY_MODAL = `TOGGLE_DISPLAY_MODAL`;
export const TOGGLE_JOIN_CODE_MODAL = `TOGGLE_JOIN_CODE_MODAL`;
export const CAPTURE_JOIN_CODE = `CAPTURE_JOIN_CODE`;
export const DISPLAY_OWNED_TOPIC = `DISPLAY_OWNED_TOPIC`;
export const SET_TOPICS_LIST = `SET_TOPICS_LIST`;
export const CAPTURE_CURRENT_USER = `CAPTURE_CURRENT_USER`;
export const TOGGLE_JOIN_SURVEY_MODAL = `TOGGLE_JOIN_SURVEY_MODAL`;
export const CAPTURE_SELECTED_REQUEST_ID = 'CAPTURE_SELECTED_REQUEST_ID';
export const TOGGLE_NEW_REQUEST_MODAL = `TOGGLE_NEW_REQUEST_MODAL`;
export const TOGGLE_NEW_REQUEST_SUCCESS_MODAL = `TOGGLE_NEW_REQUEST_SUCCESS_MODAL`;

export const toggleDisplayModal = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_DISPLAY_MODAL });
  };
};

export const toggleJoinSurveyModal = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_JOIN_SURVEY_MODAL });
  };
};

export const toggleJoinCodeModal = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_JOIN_CODE_MODAL });
  };
};

export const captureJoinCode = joinCode => {
  return dispatch => {
    dispatch({ type: CAPTURE_JOIN_CODE, payload: joinCode });
  };
};

export const toggleDisplayOwnedTopic = id => {
  return dispatch => {
    dispatch({ type: DISPLAY_OWNED_TOPIC, payload: id });
  };
};

export const setTopicsList = newList => {
  return dispatch => {
    dispatch({ type: SET_TOPICS_LIST, payload: newList });
  };
};

export const getCurrentUser = user => {
  return dispatch => {
    dispatch({ type: CAPTURE_CURRENT_USER, payload: user });
  };
};

export const getCurrentRequestId = id => {
  return dispatch => {
    dispatch({ type: CAPTURE_SELECTED_REQUEST_ID, payload: id });
  };
};

export const toggleNewRequestModal = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_NEW_REQUEST_MODAL });
  };
};

export const toggleNewRequestSuccessModal = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_NEW_REQUEST_SUCCESS_MODAL });
  };
};
