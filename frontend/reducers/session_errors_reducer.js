import { RECEIVED_SESSION_ERRORS, RECEIVED_CURRENT_USER } from '../actions/session_actions';

export default (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVED_SESSION_ERRORS:
            return action.errors;
        case RECEIVED_CURRENT_USER:
            return {};
        default:
            return state;
    }
};