import initialState from './initialState';
import {
  POST_INITIALIZE, 
  ADD_FAN_SUCCESS, 
  ADD_FAN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions/fan-actions'; 

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    case ADD_FAN_SUCCESS:
      return {
        ...state,
        error: "",
        isSubmitting: false,
        fan: {
          fan_id: action.payload.id[0],
          username: action.payload.username,
          password: action.payload.password,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          email: action.payload.email,
          city: action.payload.city,
          state: action.payload.state
        },
        isLoggedIn: false
      };

    case ADD_FAN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        fan: action.payload,
        isLoggedIn: true
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
}

export default reducer;