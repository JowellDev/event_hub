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
    CLEAR_ERRORS,
    CREATE_EVENT,
    CLEAR_SUCCESS,
    PUBLISH_EVENT,
    GET_EVENT,
    GET_MANAGER,
    UPDATE_INFO,
    ERR_UPDATE_INFO
} from '../types';

const ManagerAuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        managerIsAuth: localStorage.getItem('isAuth'),
        manager: localStorage.getItem('user'),
        managerEvents: [],
        event: null,
        loading: true,
        error: null,
        success: null
        
    }   
    const [state, dispatch] = useReducer(ManagerAuthReducer, initialState)

    const managerRegister = async (FormData) => {
        try {
            const res = await Api.post('/organizer/register', FormData)
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
        } catch (err) {
            dispatch({type: REGISTER_FAIL, payload: err.response.data.message})
        }
    }

    const loginManager = async (FormData) => {
        try{
            const res = await Api.post('/organizer/login', FormData);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
        } catch (err) {
            dispatch({type: LOGIN_FAIL, payload: err.response.data.message});
        }
    }

    const logoutManager = async () => {
        await Api.delete('/logout')
        dispatch({type: LOGOUT})
    }

    const clearError = () => { dispatch({type: CLEAR_ERRORS})}
    const clearSuccess = () => { dispatch({type: CLEAR_SUCCESS})}

    const createEvent = async (FormData) => {
        try{
            const res = await Api.post('/event/store', FormData);
            dispatch({type: CREATE_EVENT, payload: res.data})
        }catch(err){
            console.log(err);
        }
        
    }

    const getManagerEvents = async (id) => {
        try{
            const res = await Api.get(`/organizer/${id}`);
            dispatch({type: GET_MANAGER, payload: res.data})
        }catch(err){
            console.log(err)
        }
    }
    
    const getEvent = async (id) => {
        try{
            const res = await Api.get(`/events/${id}`);
            dispatch({type: GET_EVENT, payload: res.data})
        }catch(err){
            console.log(err)
        }
        
    }

    const publishEvent = async (id, formData) => {
        try{
            const res = await Api.put(`/event/publication/${id}`, formData);
            dispatch({type: PUBLISH_EVENT, payload: res.data});
        }catch(err){
            console.log(err)
        }
    }

    const deleteEvent = async (id) => {
        try{
            const res = await Api.delete(`/event/${id}`);
            dispatch({type: PUBLISH_EVENT, payload: res.data})
        }catch(err) {
            console.log(err)
        }
    }

    const resetPassword = async (id, formData) => {
        try {
            const res = await Api.put(`/organizer/password-reset/${id}`, formData)
            dispatch({type: UPDATE_INFO, payload: res.data})
        } catch (err) {
            dispatch({type: ERR_UPDATE_INFO, payload: err.response.data})
        }
    }

    const updateInfo = async (id, formData) => {
        try {
            const res = await Api.put(`organizer/${id}`, formData)
            dispatch({type: UPDATE_INFO, payload: res.data})
        } catch (err) {
            dispatch({type: ERR_UPDATE_INFO, payload: err.response.data})
        }
    }

    return(
        <ManagerAuthContext.Provider
            value={{
                token: state.token,
                managerIsAuth: state.managerIsAuth,
                loading: state.loading,
                error: state.error,
                manager: state.manager,
                managerEvents: state.managerEvents,
                event: state.event,
                success: state.success,
                managerRegister,
                loginManager,
                logoutManager,
                clearError,
                clearSuccess,
                createEvent,
                publishEvent,
                getEvent,
                deleteEvent,
                getManagerEvents,
                resetPassword,
                updateInfo
            }}
        >
            {props.children}
        </ManagerAuthContext.Provider>
    )
}

export default ManagerAuthState;