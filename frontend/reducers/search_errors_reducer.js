import { RECEIVED_SEARCH_ERRORS } from '../actions/restaurant_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const searchErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVED_SEARCH_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default searchErrorsReducer;