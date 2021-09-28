import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice";
import edamamReducer from "../slices/EdamamSlice";
import userReducer from "../slices/userinfo";

const rootReducer = combineReducers({
  auth: authReducer,
  edamam: edamamReducer,
  user: userReducer,
});

export default rootReducer;
