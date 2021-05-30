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
    CLEAR_ERRORS,
    CLEAR_SUCCESS,
    GET_USER,
    UPDATE_INFO,
    ERR_UPDATE_INFO,
    DELETE_EVENT,
    ADD_TO_FAVOURITES,
    PARTICIPE_TO_EVENT,
    ERROR
} from '../types';

const UserAuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
        userIsAuth: null,
        favourite_events: null,
        loading: true,
        error: null,
        success: null
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
        await Api.delete('/logout');
        dispatch({type: LOGOUT});
    }

    const getUser = async (id) => {
        try {
            const res = await Api.get(`/user/${id}`);
            dispatch({type: GET_USER, payload: res.data})
        } catch (err) {
            console.log(err);
        }
    }

    const deleteEvent = async (eventId, userId) => {
        try {
            const res = await Api.delete(`/user/favourite-event/${userId}/${eventId}`);
            dispatch({type:DELETE_EVENT, payload: res.data});
        }catch(err){
            console.log(err);
        }
    }

    const updateInfo = async (id, formData) => {
        try {
            const res = await Api.put(`/user/${id}`, formData);
            dispatch({type:UPDATE_INFO, payload: res.data});
        }catch(err){
            dispatch({type: ERR_UPDATE_INFO});
        }
    }

    const resetPassword = async (id, formData) => {
        try {
            const res = await Api.put(`/user/password-reset/${id}`, formData)
            dispatch({type: UPDATE_INFO, payload: res.data})
        } catch (err) {
            dispatch({type: ERR_UPDATE_INFO, payload: err.response.data})
        }
    }

    const clearError = () => dispatch({type:CLEAR_ERRORS});
    const clearSuccess = () => dispatch({type: CLEAR_SUCCESS});


    const participeToEvent = async (eventId, userId) => {
        try {
            const res = await Api.post(`/event/participant/${eventId}/${userId}`);
            dispatch({type:PARTICIPE_TO_EVENT, payload: res.data});
        }catch(err){
            dispatch({type:ERROR, payload: err.response.data})
        }
    }

    const addToFavourite = async (eventId, userId) => {
        try {
            const res = await Api.post(`/user/favourite-event/${userId}/${eventId}`);
            dispatch({type:ADD_TO_FAVOURITES, payload: res.data});
        }catch(err){
            dispatch({type:ERROR, payload: err.response.data})
        }
    }

    return(
        <UserAuthContext.Provider
            value={{
                token: state.token,
                userIsAuth: state.userIsAuth,
                loading: state.loading,
                error: state.error,
                user: state.user,
                success: state.success,
                favourite_events: state.favourite_events,
                userRegister,
                loginUser,
                logoutUser,
                clearError,
                clearSuccess,
                getUser,
                updateInfo,
                resetPassword,
                deleteEvent,
                participeToEvent,
                addToFavourite
            }}
        >
            {props.children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthState;