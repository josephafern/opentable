import { RECEIVED_BOOKING, RECEIVED_BOOKINGS, DESTROYED_BOOKING } from "../actions/booking_actions";

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVED_BOOKING:
            newState[action.booking.id] = action.booking;
            return newState;
        case RECEIVED_BOOKINGS:
            newState = action.bookings;
            return newState;
        case DESTROYED_BOOKING:
            delete newState[action.booking.id];
            return newState;
        default:
            return state;
    }
}

export default bookingsReducer;