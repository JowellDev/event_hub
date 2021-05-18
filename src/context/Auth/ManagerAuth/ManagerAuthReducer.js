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
          localStorage.setItem('token', action.payload.token.access_token)
          return{
                ...state,
                token: action.payload.token.access_token,
                managerIsAuth: true,
                manager: action.payload.organizer,
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
            localStorage.setItem('token', action.payload.token.access_token)
            return{
                ...state,
                token: action.payload.token.access_token,
                managerIsAuth: true,
                manager: action.payload.organizer,
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