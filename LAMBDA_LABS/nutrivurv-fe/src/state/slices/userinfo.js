import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "../../components/utils/auth/axioswithAuth";

const nutrivurvAPI = process.env.REACT_APP_NUTRIVURV_API;

const initialState = {
  user: {},
  journal: {},
  entries: {},
  deleteEntries: false,
  items: {},
  fetchEntriesStart: false,
  fetchEntriesSuccess: false,
  fetchEntriesFail: false,
  fetchEntriesLoad: false,
  editEntriesStart: false,
  editEntriesSuccess: false,
  editEntriesFail: false,
  editError: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setJournal: (state, action) => {
      state.journal = action.payload;
    },
    setEntriesStart: (state, action) => {
      state.fetchEntriesLoad = false;
      state.fetchEntriesStart = true;
      state.fetchEntriesSuccess = false;
      state.fetchEntriesFail = false;
    },
    setEntries: (state, action) => {
      state.entries = action.payload;
      state.fetchEntriesSuccess = true;
      state.fetchEntriesStart = false;
      state.fetchEntriesFail = false;
    },
    loading: (state, action) => {
      state.fetchEntriesLoad = true;
    },
    stopLoading: (state, action) => {
      state.fetchEntriesLoad = false;
    },
    setEntriesFail: (state, action) => {
      state.fetchEntriesStart = false;
      state.fetchEntriesSuccess = false;
      state.fetchEntriesFail = true;
    },
    editJournalStart: (state, action) => {
      state.editEntriesSuccess = true;
      state.editEntriesFail = false;
      state.editEntriesStart = true;
    },
    editJournalFail: (state, action) => {
      state.editError = action.payload;
      state.editEntriesSuccess = false;
      state.editEntriesFail = true;
      state.editEntriesStart = false;
    },
    editJournalSuccess: (state, action) => {
      state.items = action.payload;
      state.editEntriesSuccess = true;
      state.editEntriesFail = false;
      state.editEntriesStart = false;
    },
    setDeleteStart: (state) => {
      state.fetchEntriesStart = true;
      state.deleteEntries = false;
    },
    setDeleteSuccess: (state) => {
      state.fetchEntriesStart = false;
      state.deleteEntries = true;
    },
    setDeleteFailure: (state) => {
      state.fetchEntriesStart = false;
      state.deleteEntries = false;
    },
  },
});

export const {
  setUser,
  setJournal,
  setEntries,
  setDeleteStart,
  setDeleteSuccess,
  setDeleteFailure,
  editJournalStart,
  editJournalFail,
  editJournalSuccess,
  setEntriesStart,
  loading,
  stopLoading,
} = UserSlice.actions;

export const Journal = (id, day) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${nutrivurvAPI}/api/journal/${id}/${day} `
    );
    dispatch(setJournal(response.data));
  } catch (err) {}
};

export const addFoodToJournal = (post, date) => (dispatch) => {
  axiosWithAuth()
    .post(`${nutrivurvAPI}/api/log`, post)
    .then((response) => console.log(response.data))
    .then(() => {
      dispatch(getFoodLogEntries(date));
    })
    .catch((err) => console.dir(err));
};

export const editFoodJournal = (id, put, date) => (dispatch) => {
  dispatch(editJournalStart());
  axiosWithAuth()
    .put(`https://nutrivurv-be.herokuapp.com/api/log/${id}`, put)
    .then((response) => {
      dispatch(editJournalSuccess(response.data));
    })
    .then(() => {
      dispatch(getFoodLogEntries(date));
    })
    .catch((err) => {
      console.dir(err);
      dispatch(editJournalFail(err.response.data.message));
    });
};

export const getFoodLogEntries = (date) => (dispatch) => {
  axiosWithAuth()
    .get(`${nutrivurvAPI}/api/log/date/${date}`)
    .then((response) => {
      dispatch(setEntries(response.data));
    })
    .catch((err) => console.dir(err));
};

export const deleteFoodLogEntries = (id) => (dispatch) => {
  dispatch(setDeleteStart());
  axiosWithAuth()
    .delete(`${nutrivurvAPI}/api/log/${id}`)
    .then((response) => {
      dispatch(setDeleteSuccess(response.data));
    })
    .catch((error) => {
      dispatch(setDeleteFailure(error.response.data.message));
    });
};

export default UserSlice.reducer;
