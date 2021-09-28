const initialState = {
  fullName: '',
  unit: '',
  email: '',
  date: '',
  phoneNumber: '',
  location: '',
  description: '',
  formSubmitted: false,
  error: 'Something went wrong',
};

export const workorderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WORKORDER_SUBMITTED':
      return {
        ...state,
        fullName: action.payload.fullName,
        unit: action.payload.unit,
        email: action.payload.email,
        date: action.payload.date,
        phoneNumber: action.payload.phoneNumber,
        location: action.payload.location,
        description: action.payload.description,
        formSubmitted: true,
      };
    case 'FORM_FAILED':
      return {
        ...state,
        formSubmitted: false,
        error: state.error,
      };
    default:
      return state;
  }
};

export default workorderReducer;
