import { RECEIVED_REVIEW_ERRORS } from '../actions/reviews_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const reviewsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVED_REVIEW_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default reviewsErrorsReducer;