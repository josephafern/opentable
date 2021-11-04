import { combineReducers } from "redux";
import reviewsErrorsReducer from "./reviews_errors_reducer";

import sessionErrorsReducer from "./session_errors_reducer";
import searchErrorsReducer from './search_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reviews: reviewsErrorsReducer,
    search: searchErrorsReducer

});

export default errorsReducer;