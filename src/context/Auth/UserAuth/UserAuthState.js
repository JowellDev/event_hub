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
        userIsAuth: localStorage.getItem('userIsAuth'),
        user: localStorage.getItem('user'),
        favorites_events: null,
        loading: true,
        error: null
    }
    const [state, dispatch] = useReducer(UserAuthReducer, initialState);

    const userRegister = async (FormData) => {
        try {
            const res = await Api.post('/user/register', FormData);
            dispatch({type: REGISTER_SUCCESS, payload: res.data});
        } catch (err) {
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
        await Api.delete('/logout')
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
                favorites_events: state.favorites_events,
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