import * as RestaurantsApiUtil from '../util/restaurants_api_util'

export const RECEIVED_RESTAURANTS = 'RECEIVED_RESTAURANTS';
export const RECEIVED_RESTAURANT = 'RECEIVED_RESTAURANT';
export const START_LOADING_RESTAURANTS = 'START_LOADING_RESTAURANTS';
export const START_LOADING_RESTAURANT = 'START_LOADING_RESTAURANT';

const receivedRestaurants = (restaurants) => {
    return {
        type: RECEIVED_RESTAURANTS,
        restaurants
    }
}

const receivedRestaurant = (restaurant) => {
    return {
        type: RECEIVED_RESTAURANT,
        restaurant
    }
}

export const startLoadingRestaurants = () => {
    return {
        type: START_LOADING_RESTAURANTS
    }
}

export const startLoadingRestaurant = () => {
    return {
        type: START_LOADING_RESTAURANT
    }
}

export const fetchRestaurants = () => (dispatch) => {
    dispatch(startLoadingRestaurants());
    return RestaurantsApiUtil.fetchRestaurants().then(restaurants => dispatch(receivedRestaurants(restaurants)))
}

export const fetchRestaurant = (restId) => (dispatch) => {
    return RestaurantsApiUtil.fetchRestaurant(restId).then(restaurant => dispatch(receivedRestaurant(restaurant)))
}

export const findRestraurants = (query) => (dispatch) => {
    return RestaurantsApiUtil.findRestraurants(query).then(restaurants => dispatch(receivedRestaurants(restaurants)))
}