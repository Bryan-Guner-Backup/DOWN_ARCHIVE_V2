import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const edamamAPI = process.env.REACT_APP_EDAMAM_API;
const edamamAppID = process.env.REACT_APP_EDAMAM_APP_ID;
const edamamAppKey = process.env.REACT_APP_EDAMAM_APP_KEY;

const initialState = {
  items: [],
  currentItem: {},
  searchError: null,
  searchNutrientsError: null,
  searchStart: false,
  searchSuccess: false,
  searchFail: false,
  searchNutrientsStart: false,
  searchNutrientsSuccess: false,
  searchNutrientFail: false,
  searchNutrientsEnd: false,
  pagination: "",
  paginationSuccess: false,
  prevPage: "",
  pageArr: [1, 2, 3],
};

const EdamamSlice = createSlice({
  name: "edamam",
  initialState,
  reducers: {
    callItem: (state, action) => {
      state.searchStart = true;
      state.searchSuccess = false;
      state.searchFail = false;
      state.searchError = "";
      state.currentItem = {};
      state.searchNutrientsStart = false;
      state.searchNutrientsSuccess = false;
      state.searchNutrientFail = false;
    },
    callItemSuccess: (state, action) => {
      state.items = action.payload;
      state.searchStart = false;
      state.searchSuccess = true;
      state.searchFail = false;
      state.searchError = "";
    },
    callItemFail: (state, action) => {
      state.searchError = action.payload;
      state.searchStart = false;
      state.searchSuccess = false;
      state.searchFail = true;
    },
    callNutrientsStart: (state) => {
      state.searchNutrientsStart = true;
      state.searchNutrientsSuccess = false;
      state.searchNutrientFail = false;
      state.searchNutrientsEnd = false;
    },
    callNutrientsSuccess: (state, action) => {
      state.currentItem = {
        ...action.payload.currentItem,
      };
      state.searchNutrientsStart = false;
      state.searchNutrientsSuccess = true;
      state.searchNutrientFail = false;
      state.searchNutrientsEnd = false;
    },
    callNutrientsEnd: (state) => {
      state.searchNutrientsEnd = true;
      state.searchNutrientsStart = true;
      state.searchNutrientsSuccess = false;
      state.searchNutrientFail = false;
    },
    callNutrientsFail: (state, action) => {
      state.searchNutrientsError = action.payload;
      state.searchNutrientsStart = false;
      state.searchNutrientsSuccess = false;
      state.searchNutrientFail = true;
    },
    Pages: (state, action) => {
      state.pagination = action.payload.data["_links"];
      state.prevPage = [...state.prevPage, action.payload.config.url];
      state.paginationSuccess = true;
    },
    NextPage: (state, action) => {
      state.pageArr = action.payload;
    },
  },
});

export const {
  callItem,
  callItemFail,
  callItemSuccess,
  searchError,
  callNutrientsStart,
  callNutrientsSuccess,
  callNutrientsFail,
  callNutrients,
  callNutrientsEnd,
  Pages,
  NextPage,
} = EdamamSlice.actions;

export const Next = (arr) => (dispatch) => {
  dispatch(NextPage(arr));
};

export const searchFood = (search, api) => (dispatch) => {
  dispatch(callItem());
  const edamam = `${edamamAPI}/food-database/v2/parser?app_id=${edamamAppID}&app_key=${edamamAppKey}&ingr=${search}`;
  axios
    .get(search === null ? api : edamam)
    .then((res) => {
      dispatch(callItemSuccess(res.data.hints));
      dispatch(Pages(res));
    })
    .catch((error) => {
      dispatch(callItemFail(error.response));
    });
};

export const getNutrients = (
  quantity,
  measure,
  foodId,
  label = null,
  image = null,
  measures = null
) => async (dispatch, getState) => {
  dispatch(callNutrientsStart());

  try {
    const response = await axios.post(
      `${edamamAPI}/food-database/v2/nutrients?app_id=${edamamAppID}&app_key=${edamamAppKey}`,
      { ingredients: [{ quantity, measureURI: measure.uri, foodId }] }
    );

    const currentItem = getState().edamam.currentItem;

    dispatch(
      callNutrientsSuccess({
        currentItem: {
          quantity,
          measure,
          foodId,
          label: label ? label : currentItem.label,
          image: image ? image : currentItem.image,
          measures: measures ? measures : currentItem.measures,
          nutrition: response.data,
        },
      })
    );
  } catch (error) {
    console.dir(error);
    dispatch(callNutrientsFail(error.response));
  }
};

export const NutrientEnd = () => (dispatch) => {
  dispatch(callNutrientsEnd());
};

export default EdamamSlice.reducer;
