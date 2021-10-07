import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import restaurantsReducer from './restaurants_reducer';
import bookingsReducer from './bookings_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    bookings: bookingsReducer,
    reviews: reviewsReducer
});

export default entitiesReducer;
