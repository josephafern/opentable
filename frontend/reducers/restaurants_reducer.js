import { RECEIVED_RESTAURANTS, RECEIVED_RESTAURANT, CLEAR_RESTAURANTS } from "../actions/restaurant_actions";

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVED_RESTAURANTS:
            return action.restaurants;
        case RECEIVED_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            return newState;
        case CLEAR_RESTAURANTS:
            return {};
        default:
            return state;
    }
}

export default restaurantsReducer;