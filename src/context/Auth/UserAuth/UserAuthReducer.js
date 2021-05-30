import Api from '../../../utils/api';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    CLEAR_SUCCESS,
    GET_USER,
    UPDATE_INFO,
    ERR_UPDATE_INFO,
    DELETE_EVENT,
    ADD_TO_FAVOURITES,
    PARTICIPE_TO_EVENT,
    ERROR
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
          localStorage.setItem('token', action.payload.token.access_token);
          localStorage.setItem('user', JSON.stringify(action.payload.user));
          Api.defaults.headers.Authorization = `Bearer ${action.payload.token.access_token}`;
          return{
                ...state,
                ...action.payload,
                userIsAuth: true,
                user: action.payload.user,
                favourite_events: action.payload.user.favourite_events,
                loading: false
          }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            Api.defaults.headers.Authorization = null;
            return{
                ...state,
                token: null,
                userIsAuth: false,
                user: null,
                favourite_events: null,
                error: action.payload,
                loading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token.access_token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            Api.defaults.headers.Authorization = `Bearer ${action.payload.token.access_token}`;
            return{
                ...state,
                userIsAuth: true,
                user: action.payload.user,
                favourite_events: action.payload.user.favourite_events,
                loading: false
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            Api.defaults.headers.Authorization = null;
            return{
                ...state,
                token: null,
                userIsAuth: false,
                user: null,
                favourite_events: null,
                error: action.payload,
                loading: true
            }
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            Api.defaults.headers.Authorization = null;
            return{
                ...state,
                token:null,
                userIsAuth: false,
                user: null,
                favourite_events: null,
                loading: true
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                favourite_events: action.payload.favourite_events
            }
        case UPDATE_INFO:
            return {
                ...state,
                success: action.payload.message
            }
        case DELETE_EVENT:
            return {
                ...state,
                success: action.payload.message
            }
        case PARTICIPE_TO_EVENT:
            return {
                ...state,
                success: action.payload.message
            }
        case ADD_TO_FAVOURITES:
        return {
            ...state,
            success: action.payload.message
        }
        case ERR_UPDATE_INFO:
            return {
                ...state,
                error: action.payload.message
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        case CLEAR_SUCCESS:
            return{
                ...state,
                success:null
            }
        case ERROR:
            return {
                ...state,
                error: action.payload.message
            }
        default:
            break;
    }
}

export default reducer;