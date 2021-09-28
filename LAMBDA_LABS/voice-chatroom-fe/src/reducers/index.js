import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './auth';
import mentorReducer from './mentorReducer';

export default combineReducers({
    userReducer,
    authReducer,
    mentorReducer
})