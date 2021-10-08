import { DESTROYED_BOOKING } from '../actions/booking_actions';
import { DESTROYED_REVIEW } from '../actions/reviews_actions';
import { RECEIVED_CURRENT_USER } from '../actions/session_actions';
import { RECEIVED_USERS, RECEIVED_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVED_CURRENT_USER:
            newState = Object.assign(newState, {[action.current.id]: action.current})
            return newState;
        case RECEIVED_USERS:
            return action.users;
        case RECEIVED_USER:
            newState[action.user.id] = action.user;
            return newState;
        case DESTROYED_BOOKING:
            delete newState[action.booking.maker_id].reservations[action.booking.id];
            return newState;
        case DESTROYED_REVIEW:
            delete newState[action.review.author_id].reviews[action.review.id];
            return newState;
        default:
            return state;
    }
};

export default usersReducer;