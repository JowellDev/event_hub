import {useReducer} from 'react';
import UserAuthContext from './UserAuthContext';
import UserAuthReducer from './UserAuthReducer';
import Api from '../../../utils/api';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const UserAuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        userIsAuth: null,
        loading: true,
        error: null,
        user: null
    }
    const [state, dispatch] = useReducer(UserAuthReducer, initialState);

    const userRegister = async (FormData) => {
        try {
            const res = await Api.post('/user/register', FormData);
            console.log(res)
            dispatch({type: REGISTER_SUCCESS, payload: res.data});
        } catch (err) {
            console.log(err)
            dispatch({type: REGISTER_FAIL, payload: err.response.data.message});
        }
    }

    const loginUser = async (FormData) => {
        try{
            const res = await Api.post('/user/login', FormData);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
        } catch (err) {
            dispatch({type: LOGIN_FAIL, payload: err.response.data.message});
        }
    }

    const logoutUser = async () => {
        dispatch({type: LOGOUT});
    }

    const clearError = () => dispatch({type:CLEAR_ERRORS});

    return(
        <UserAuthContext.Provider
            value={{
                token: state.token,
                userIsAuth: state.userIsAuth,
                loading: state.loading,
                error: state.error,
                user: state.user,
                userRegister,
                loginUser,
                logoutUser,
                clearError
            }}
        >
            {props.children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthState;