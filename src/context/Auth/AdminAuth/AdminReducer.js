import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    CLEAR_SUCCESS,
    GET_MANAGERS,
    GET_USERS,
    GET_ADMINS,
    GET_EVENTS,
    ACTION_SUCCESS,
    ACTION_FAILED
} from '../types';
import Api from '../../../utils/api';

const reducer = (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return{
            ...state,
            success: action.payload.message
            }
        case REGISTER_FAIL:
            return{
                ...state,
                error: action.payload.message
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token.access_token);
            localStorage.setItem('admin', JSON.stringify(action.payload.user));
            Api.defaults.headers.Authorization = `Bearer ${action.payload.token.access_token}`;
            return{
                ...state,
                token: action.payload.token.access_token,
                admin: action.payload.user,
                adminIsAuth: true,
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('admin');
            Api.defaults.headers.Authorization = null;
            return{
                ...state,
                token: null,
                managerIsAuth: false,
                admin: null,
                error: action.payload.message,
            }
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('admin');
            Api.defaults.headers.Authorization = null;
            return{
                ...state,
                token:null,
                admin:null,
                adminIsAuth: false,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }
        case CLEAR_SUCCESS: 
            return {
                ...state,
                success: null
            }
        case GET_MANAGERS:
            return {
                ...state,
                managers: action.payload,
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_ADMINS:
            return {
                ...state,
                managers: action.payload,
            }
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload.events
            }
        case ACTION_SUCCESS:
            return {
                ...state,
                success: action.payload.message,
            }
        case ACTION_FAILED:
            return {
                ...state,
                error: action.payload.message,
            }
        default:
            return state;
    }
}

export default reducer;