// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Import action TYPES at the top of the file

import { axiosWithAuth } from '../../api/axiosWithAuth';

export const setCurrentUser = () => async dispatch => {
  dispatch({ type: 'LOG_IN' });
  dispatch({ type: 'SET_LOADING', payload: true });
  try {
    let currentUser = await axiosWithAuth()
      .get('/users/me')
      .then(res => res.data.user);
    dispatch({ type: 'SET_CURRENT_USER', payload: currentUser });
  } catch (error) {
    alert('error');
    console.log(error);
    console.log(error?.response);
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false });
  }
};

export const addDocusignURLAction = url => dispatch => {
  dispatch({ type: 'ADD_DOCUSIGN_URL', payload: url });
};

export const addSignerInfo = info => dispatch => {
  dispatch({ type: 'ADD_SIGNER_INFO', payload: info });
};

export const getFamily = () => {};
