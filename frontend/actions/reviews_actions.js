import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVED_REVIEWS = 'RECEIVED_REVIEWS';
export const RECEIVED_REVIEW = 'RECEIVED_REVIEW';

const receivedReviews = (reviews) => {
    return {
        type: RECEIVED_REVIEWS,
        reviews
    }
}

const receivedReview = (review) => {
    return {
        type: RECEIVED_REVIEW,
        review
    }
}

export const fetchReviewsByUser = (userId) => (dispatch) => {
    return ReviewsApiUtil.fetchReviewsByUser(userId).then(reviews => dispatch(receivedReviews(reviews)))
}

export const fetchReviewsByRestId = (restId) => (dispatch) => {
    return ReviewsApiUtil.fetchReviewsByRestId(restId).then(reviews => dispatch(receivedReviews(reviews)))
}