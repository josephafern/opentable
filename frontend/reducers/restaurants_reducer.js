import { RECEIVED_RESTAURANTS, RECEIVED_RESTAURANT } from "../actions/restaurant_actions";

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch(action.type){
        case RECEIVED_RESTAURANTS:
            return action.restaurants;
        case RECEIVED_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            return newState;
        default:
            return state;
    }
}

export default restaurantsReducer;