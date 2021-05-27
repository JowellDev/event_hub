import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    CREATE_EVENT,
    CLEAR_SUCCESS,
    PUBLISH_EVENT,
    GET_EVENT,
    DELETE_EVENT,
    GET_MANAGER,
    SET_AUTH_USER,
    ERR_UPDATE_INFO,
    UPDATE_INFO
} from '../types';
import Api from '../../../utils/api';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                token: action.payload.token,
                manager: action.payload.user,
                managerIsAuth: true,
                managerEvents: action.payload.user.events,
                loading: false,

            }
        case REGISTER_SUCCESS:
          localStorage.setItem('token', action.payload.token.access_token);
          localStorage.setItem('user', JSON.stringify(action.payload.organizer));
          Api.defaults.headers.Authorization = `Bearer ${action.payload.token.access_token}`;
          return{
                ...state,
                token: action.payload.token.access_token,
                manager: action.payload.organizer,
                managerIsAuth: true,
                managerEvents: action.payload.organizer.events,
                loading: false,
          }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            Api.defaults.headers.Authorization = null;
            return{
                ...state,
                token: null,
                manager:null,
                managerIsAuth: false,
                managerEvents: null,
                error: action.payload,
                loading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token.access_token);
            localStorage.setItem('user', JSON.stringify(action.payload.organizer));
            Api.defaults.headers.Authorization = `Bearer ${action.payload.token.access_token}`;
            return{
                ...state,
                token: action.payload.token.access_token,
                manager: action.payload.organizer,
                managerIsAuth: true,
                managerEvents: action.payload.organizer.events,
                loading: false
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            Api.defaults.headers.Authorization = null;
            return{
                ...state,
                token: null,
                managerIsAuth: false,
                manager: null,
                managerEvents: null,
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
                manager:null,
                managerIsAuth: false,
                managerEvents: null,
                loading: true
            }
        
        case CREATE_EVENT: 
            return {
                ...state,
                managerEvents: [...state.managerEvents, action.payload],
                success: 'Event créé avec succès'
            }
        case GET_EVENT:
            return {
                ...state,
                event: action.payload.event
            }
        case PUBLISH_EVENT: 
            return {
                ...state
            }
        case DELETE_EVENT: 
        return {
            ...state,
            success: action.payload.message
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
        case GET_MANAGER:
            return {
                ...state,
                manager: action.payload,
                managerEvents: action.payload.events
            }
        case UPDATE_INFO:
            return {
                ...state,
                success: action.payload.messsage
            }
        case ERR_UPDATE_INFO:
            return {
                ...state,
                error: action.payload.message
            }
        default:
            return state;
    }
}

export default reducer;