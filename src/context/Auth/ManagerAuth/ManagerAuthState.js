import {useReducer} from 'react';
import ManagerAuthContext from './ManagerAuthContext';
import ManagerAuthReducer from './ManagerAuthReducer';
import axios  from 'axios';
import setAuthToken from '../../../utils/setAuthToken';
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

const ManagerAuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        managerIsAuth: null,
        loading: true,
        error: null,
        manager: null
    }
    const [state, dispatch] = useReducer(ManagerAuthReducer, initialState)
    const config = {
        header: {
            'content-type': 'application/json'
        }
    }

    //Load authenticated manager
    const loadManager = async () => {
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
            dispatch({type: MANAGER_LOADED, payload: res.data})
        } catch (err) {
            dispatch({type:AUTH_ERROR, payload: err.res.data.msg})
        }
    }

    //Register manager
    const managerRegister = async (FormData) => {
        try {
            //const res = await axios.post('url', FormData, config)
            const res = {
                data : {
                    token: 'qfkjghfjgkgHJHFVJHVjjkbkjbJHV'
                }
            }
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
            loadManager()
        } catch (err) {
            dispatch({type: REGISTER_FAIL, payload: err.res.data.msg})
        }

    }

    //Login manager
    const loginManager =async (FormData) => {
        try{
            //const res = await axios.post('url', FormData, config)
            const res = {
                data : {
                    token: 'qfkjghfjgkgHJHFVJHVjjkbkjbJHV'
                }
            }
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
            loadManager()
        } catch (err) {
            dispatch({type: LOGIN_FAIL, payload: err.res.data.msg})
        }
    }

    //Logout manager
    const logoutManager = () => {
        dispatch({type: LOGOUT})
    }

    //clear error
    const clearError = () => dispatch({type:CLEAR_ERRORS})

    return(
        <ManagerAuthContext.Provider
            value={{
                token: state.token,
                managerIsAuth: state.managerIsAuth,
                loading: state.loading,
                error: state.error,
                manager: state.manager,
                managerRegister,
                loginManager,
                loadManager,
                logoutManager,
                clearError
            }}
        >
            {props.children}
        </ManagerAuthContext.Provider>
    )
}

export default ManagerAuthState;