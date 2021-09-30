import * as RestaurantsApiUtil from '../util/restaurants_api_util'

export const RECEIVED_RESTAURANTS = 'RECEIVED_RESTAURANTS';
export const RECEIVED_RESTAURANT = 'RECEIVED_RESTAURANT';

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

export const fetchRestaurants = () => (dispatch) => {
    return RestaurantsApiUtil.fetchRestaurants().then(restaurants => dispatch(receivedRestaurants(restaurants)))
}

export const fetchRestaurant = (restId) => (dispatch) => {
    return RestaurantsApiUtil.fetchRestaurant(restId).then(restaurant => dispatch(receivedRestaurant(restaurant)))
}