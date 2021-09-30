export const allRestaurants = ({ entities }) => {
    return Object.keys(entities.restaurants).map(id => entities.restaurants[id])
}