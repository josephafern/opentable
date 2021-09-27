import { LOGOUT_CURRENT_USER, RECEIVED_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = {id: null}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVED_CURRENT_USER:
            newState[action.current.id] = action.current.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            newState[action.current.id] = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;