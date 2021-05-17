import {useReducer} from 'react';
import UserAuthContext from './UserAuthContext';
import UserAuthReducer from './UserAuthReducer';
import axios  from 'axios';
import setAuthToken from '../../../utils/setAuthToken';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
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
    const [state, dispatch] = useReducer(UserAuthReducer, initialState)
    const config = {
        header: {
            'content-type': 'application/json'
        }
    }

    //Load authenticated user
    const loadUser = async () => {
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }

        try {
            //const res = await axios.get('url')
            const res = {
                data:{
                    firstname: 'Digbeu',
                    lastname: 'Joël Ephraïm',
                    email: 'joeldigbeu@gmail.com',
                    phone: '0758991427',
                    address: 'Abobo pk18'
                }
            }
            dispatch({type: USER_LOADED, payload: res.data})
        } catch (err) {
            dispatch({type:AUTH_ERROR, payload: err.res.data.msg})
        }
    }

    //Register user
    const userRegister = async (FormData) => {
        try {
            /* const res = await axios.post('url', FormData, config) */
            const res = {
                data : {
                    token: 'qfkjghfjgkgHJHFVJHVjjkbkjbJHV'
                }
            }
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
            loadUser()
        } catch (err) {
            dispatch({type: REGISTER_FAIL, payload: err.res.data.msg})
        }

    }

    //Login user
    const loginUser =async (FormData) => {
        try{
            //const res = await axios.post('url', FormData, config)
            const res = {
                data : {
                    token: 'qfkjghfjgkgHJHFVJHVjjkbkjbJHV'
                }
            }
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
            loadUser()
        } catch (err) {
            dispatch({type: LOGIN_FAIL, payload: err.res.data.msg})
        }
    }

    //Logout user
    const logoutUser = () => {
        dispatch({type: LOGOUT})
    }

    //clear error
    const clearError = () => dispatch({type:CLEAR_ERRORS})

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
                loadUser,
                logoutUser,
                clearError
            }}
        >
            {props.children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthState;