export const fetchReviewsByUser = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/reviews`
    });
}

export const fetchReviewsByRestId = (restId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/restaurants/${restId}/reviews`
    });
}

export const fetchAllUsers = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/users`
    });
}