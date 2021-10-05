import { RECEIVED_RESTAURANTS, 
         RECEIVED_RESTAURANT,
         START_LOADING_RESTAURANTS,
         START_LOADING_RESTAURANT } from '../actions/restaurant_actions';

const initialState = {
    indexLoading: false,
    detailLoading: false
}

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type){
        case START_LOADING_RESTAURANTS:
            return Object.assign(newState, { indexLoading: true })
        case START_LOADING_RESTAURANT:
            return Object.assign(newState, { detailLoading: true })
        case RECEIVED_RESTAURANTS:
            return Object.assign(newState, { indexLoading: false })
        case RECEIVED_RESTAURANT:
            return Object.assign(newState, { detailLoading: false })
        default:
            return state;
    }
}

export default loadingReducer;