export const fetchRestaurants = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/restaurants'
    });
}

export const fetchRestaurant = (restId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/restaurants/${restId}`
    });
}

export const findRestraurants = (query) => {
    return $.ajax({
        method: 'GET',
        url: `/api/restaurants/search`,
        data: { query }
    });
}