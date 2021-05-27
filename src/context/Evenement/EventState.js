import {useReducer} from 'react';
import EventContext from './EventContext';
import EventReducer from './EventReducer';
import Api from '../../utils/api';
import {
    SET_LOADING,
    GET_EVENTS,
} from './type';

const EventState = props =>{
    const initialState = {
        events: null,
        loading: false,
        error: null,
    }
    const [state, dispatch] = useReducer(EventReducer, initialState);

    const getEvents = async () => {
        try{
            setLoading();
            const res = await Api.get('/events');
            dispatch({type: GET_EVENTS, payload: res.data.events})
        }catch(err){ 
            console.log(err)
            setLoading();
        }
    }

    const setLoading = () => dispatch({type: SET_LOADING})
    
    return(
        <EventContext.Provider
            value={{
                events: state.events,
                loading: state.false,
                error: state.error,
                getEvents,
            }}
        >
            {props.children}
        </EventContext.Provider>
    )
}

export default EventState;