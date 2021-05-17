import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    MANAGER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
          localStorage.setItem('token', action.payload.token)
          return{
                ...state,
                ...action.payload,
                managerIsAuth: true,
                loading: false
          }
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                managerIsAuth: false,
                manager: null,
                error: action.payload,
                loading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                ...action.payload,
                managerIsAuth: true,
                loading: false
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                managerIsAuth: false,
                manager: null,
                error: action.payload,
                loading: true
            }
        case MANAGER_LOADED:
            return{
                ...state,
                managerIsAuth: true,
                manager: action.payload,
                loading:false
            }
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                managerIsAuth: false,
                manager: null,
                loading:true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                managerIsAuth: false,
                manager: null,
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