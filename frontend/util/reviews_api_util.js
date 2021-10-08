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

export const fetchReview = (reviewId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    });
}

export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: { review }
    });
}

export const updateReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${review.author_id}/reviews/${review.id}`,
        data: { review }
    });
}

export const destroyReview = (review) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${review.author_id}/reviews/${review.id}`
    });
}