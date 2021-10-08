import { DESTROYED_REVIEW, RECEIVED_REIVEWS, RECEIVED_REVIEW, RECEIVED_REVIEWS } from "../actions/reviews_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVED_REVIEWS:
            return action.reviews;
        case RECEIVED_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case DESTROYED_REVIEW:
            delete newState[action.review.id];
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;