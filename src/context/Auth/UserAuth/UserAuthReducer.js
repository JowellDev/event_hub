import Api from '../../../utils/api';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
          localStorage.setItem('token', action.payload.token.access_token);
          localStorage.setItem('user', JSON.stringify(action.payload.user));
          localStorage.setItem('userIsAuth', true);
          Api.defaults.headers.Authorization = `Bearer ${action.payload.token.access_token}`;
          return{
                ...state,
                ...action.payload,
                userIsAuth: true,
                user: action.payload.user,
                loading: false
          }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('userIsAuth');
            Api.defaults.headers.Authorization = null;
            return{
                ...state,
                token: null,
                userIsAuth: false,
                user: null,
                error: action.payload,
                loading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token.access_token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('userIsAuth', true);
            Api.defaults.headers.Authorization = `Bearer ${action.payload.token.access_token}`;
            return{
                ...state,
                ...action.payload,
                userIsAuth: true,
                loading: false
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('userIsAuth');
            Api.defaults.headers.Authorization = null;
            return{
                ...state,
                token: null,
                userIsAuth: false,
                user: null,
                error: action.payload,
                loading: true
            }
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('userIsAuth');
            Api.defaults.headers.Authorization = null;
            return{
                ...state,
                token:null,
                userIsAuth: false,
                user: null,
                loading: true
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            break;
    }
}

export default reducer;