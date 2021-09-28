import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const nutrivurvAPI = process.env.REACT_APP_NUTRIVURV_API;

const initialState = {
  user: {
    id: 0,
    name: "",
    email: "",
  },
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isAuthenticating: false,
  authError: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.authError = null;
      state.isAuthenticating = true;
      state.isAuthenticated = false;
    },
    authSuccess: (state, action) => {
      state.user = action.payload;
      state.authError = null;
      state.isAuthenticating = false;
      state.isAuthenticated = true;
      state.token = localStorage.getItem("token");
    },
    authFail: (state, action) => {
      state.authError = action.payload;
      state.isAuthenticating = false;
      state.isAuthenticated = false;
    },
    logout: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.user = initialState.user;
    },
  },
});

export const { authStart, authSuccess, authFail, logout } = AuthSlice.actions;

export const authenticate = (creds, type) => async (dispatch) => {
  dispatch(authStart());

  try {
    const response = await axios.post(
      `${nutrivurvAPI}/api/auth/${type}`,
      creds
    );
    localStorage.setItem("token", response.data.token);
    dispatch(authSuccess(response.data.user));
  } catch (error) {
    dispatch(authFail(error.response.data.message));
  }
};

export default AuthSlice.reducer;
