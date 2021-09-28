const WORKORDER_SUBMITTED = 'WORKORDER_SUBMITTED';
const FORM_FAILED = 'FORM_FAILED';

const workorderAction = formValues => {
  return dispatch => {
    dispatch({ type: WORKORDER_SUBMITTED, payload: formValues });
  };
};

const workorderFailed = () => {
  return dispatch => {
    dispatch({ type: FORM_FAILED });
  };
};

export default workorderAction;
