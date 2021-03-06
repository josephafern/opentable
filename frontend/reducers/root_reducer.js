import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './sessions_reducer';
import uiReducer from './ui.reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer,
    errors: errorsReducer,  
    session: sessionReducer
});

export default rootReducer;