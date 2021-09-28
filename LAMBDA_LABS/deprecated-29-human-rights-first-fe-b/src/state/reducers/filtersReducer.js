import { UPDATE_FILTERS } from '../actions/';

const initialIncidents = {
  policePresence: true,
  emptyHandForce: true,
  bluntForceWeapons: true,
  chemicalAndElectricalWeapons: true,
  lethalForce: true,
};

const initialState = {
  stateName: null,
  zipCode: null,
  startDate: '',
  endDate: '',
  incidents: initialIncidents,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
