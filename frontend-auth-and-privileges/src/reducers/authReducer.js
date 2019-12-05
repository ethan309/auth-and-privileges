import {
    GET_USERS_LOADED,
    GET_USERS_LOADING,
    GET_PRODUCTS_LOADED,
    GET_PRODUCTS_LOADING,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    users: [],
    products: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_USERS_LOADED:
            return {
                ...state,
                loading: false,
                users: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCTS_LOADED:
            return {
                ...state,
                loading: false,
                products: action.payload
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case SIGNUP_FAIL:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}
