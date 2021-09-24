import { RECEIVED_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVED_CURRENT_USER:
            newState = Object.assign(newState, {[action.current.id]: action.current})
            return newState;
        default:
            return state;
    }
};

export default usersReducer;