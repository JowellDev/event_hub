import {
    CREATE_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    FILTER_EVENT,
    CLEAR_FILTER,
    CLEAR_ERRORS,
    SET_LOADING,
    GET_EVENTS
} from './type';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        default:
            break;
    }
}

export default reducer;