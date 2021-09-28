import { userConstants } from '../actions/types';

export const initialState = {
    user: {
        id: 0,
        email: "",
        given_name: "",
        family_name: "",
        username: "",
        location: "",
        interest_1: "",
        interest_2: "",
        interest_3: "",
        created_at: "",
        avatar: "",
        isMentor: false,
        user_bio: "",
        user_rating: 0
    },
    isAuthenticated: false,
    isLoading: false,
    isLoggedIn: false,
    error: null
}

export default function authReducer(state = initialState, action){
    switch(action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null               
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isLoggedIn: true,
                error: null
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: 'Failed to log in'
            };
        case userConstants.LOGOUT:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: ''
            };

        case userConstants.REGISTER_REQUEST: 
            return { 
            ...state,
            isLoading: true
            };
        case userConstants.REGISTER_SUCCESS:
            return { 
            ...state,
            isLoading: false
            };
        case userConstants.REGISTER_FAILURE:
            return { 
            ...state,
            error: 'Failed to Register'
            };
        default:
            return state;
    }
}

