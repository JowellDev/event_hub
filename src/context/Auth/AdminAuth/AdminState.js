import {useReducer} from 'react';
import AdminContext from './AdminContext';
import AdminReducer from './AdminReducer';
import Api from '../../../utils/api';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    CLEAR_SUCCESS,
    GET_PUBLISH_EVENTS,
    GET_UNPUBLISH_EVENTS,
    GET_MANAGERS,
    GET_USERS,
    GET_ADMINS,
    ACTION_SUCCESS,
    ACTION_FAILED
} from '../types';

const AdminState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        admin: JSON.parse(localStorage.getItem('admin')),
        adminIsAuth: null,
        users: null,
        events: null,
        unpublish: null,
        admins: null,
        managers: null,
        success: null,
        error: null
        
    }   
    const [state, dispatch] = useReducer(AdminReducer, initialState)

    const createAdmin = async (formData) => {
        try {
            const res = await Api.post('/admin/register', formData)
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
        } catch (err) {
            dispatch({type: REGISTER_FAIL, payload: err.response.data})
        }
    }

    const loginAdmin = async (formData) => {
        try {
            const res = await Api.post('/admin/login', formData)
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        } catch (err) {
            dispatch({type: LOGIN_FAIL, payload: err.response.data})
        }
    }

    const logout = async () => {
        try {
            await Api.delete('/logout')
            dispatch({type: LOGOUT})
        } catch (err) {
            console.log(err);
        }
    }

    const getUsers = async () => {
        try {
            const res = await Api.get('/users')
            dispatch({type: GET_USERS, payload: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    const getManagers = async () => {
        try {
            const res = await Api.get('/organizers')
            dispatch({type: GET_MANAGERS, payload: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    const getEvents = async () => {
        try {
            const res = await Api.get('/events')
            dispatch({type: GET_PUBLISH_EVENTS, payload: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    const getUnpublished = async () => {
        try {
            const res = await Api.get('/events/unpublished')
            dispatch({type: GET_UNPUBLISH_EVENTS, payload: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    const getAdmins = async () => {
        try {
            const res = await Api.get('/admins')
            dispatch({type: GET_ADMINS, payload: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    const clearError = () => { dispatch({type: CLEAR_ERRORS})}
    const clearSuccess = () => { dispatch({type: CLEAR_SUCCESS})}

   

    return(
        <AdminContext.Provider
            value={{
                token: state.token,
                adminIsAuth: state.adminIsAuth,
                admin: state.admin,
                users: state.users,
                managers: state.managers,
                admins: state.admins,
                events: state.events,
                unpublish: state.unpublish,
                success: state.success,
                error: state.error,
                loginAdmin,
                createAdmin,
                logout,
                clearError,
                clearSuccess,
                getUsers,
                getManagers,
                getEvents,
                getUnpublished,
                getAdmins
            }}
        >
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;