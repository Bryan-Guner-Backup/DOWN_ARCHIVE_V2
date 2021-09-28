const defaultRange = {
  salary: [0, 100],
  population: [0, 100],
  rent: [0, 100],
  temp: [0, 100],
};
const initialState = {
  currentCities: [],
  allCities: [],
  filter: { ...defaultRange },
  rangeFilter: { ...defaultRange },
  isSearching: false,
};

export const currentCityReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GRAB_ALL_CITIES':
      return {
        ...state,
        allCities: action.payload,
      };
    case 'ADD_TO_CURRENT_CITIES':
      return {
        ...state,
        currentCities: [...state.currentCities, action.payload],
      };
    case 'REMOVE_FROM_CURRENT_CITIES':
      return {
        ...state,
        currentCities: action.payload,
      };
    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'UPDATE_RANGE_FILTER':
      return {
        ...state,
        rangeFilter: action.payload,
      };
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        isSearching: !state.isSearching,
      };
    default:
      return state;
  }
};
