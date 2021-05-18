import {useReducer} from 'react';
import ManagerAuthContext from './ManagerAuthContext';
import ManagerAuthReducer from './ManagerAuthReducer';
import Api from '../../../utils/api';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
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

    
    const managerRegister = async (FormData) => {
        try {
            const res = await Api.post('/organizer/register', FormData)
            console.log(res);
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
        } catch (err) {
            dispatch({type: REGISTER_FAIL, payload: err.response.data.message})
        }
    }

    const loginManager =async (FormData) => {
        try{
            const res = await Api.post('/organizer/login', FormData);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
        } catch (err) {
            dispatch({type: LOGIN_FAIL, payload: err.response.data.message});
        }
    }

    const logoutManager = async () => {
        dispatch({type: LOGOUT})
    }

    const clearError = () => dispatch({type:CLEAR_ERRORS});

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
                logoutManager,
                clearError
            }}
        >
            {props.children}
        </ManagerAuthContext.Provider>
    )
}

export default ManagerAuthState;