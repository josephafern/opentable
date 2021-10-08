import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVED_REVIEWS = 'RECEIVED_REVIEWS';
export const RECEIVED_REVIEW = 'RECEIVED_REVIEW';
export const RECEIVED_REVIEW_ERRORS = 'RECEIVED_REVIEW_ERRORS';
export const DESTROYED_REVIEW = 'DESTROYED_REVIEW';

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

export const receivedErrors = (errors) => {
    return {
        type: RECEIVED_REVIEW_ERRORS,
        errors
    }
}

export const destroyedReview = (review) => {
    return {
        type: DESTROYED_REVIEW,
        review
    }
}

export const fetchReviewsByUser = (userId) => (dispatch) => {
    return ReviewsApiUtil.fetchReviewsByUser(userId).then(reviews => dispatch(receivedReviews(reviews)))
}

export const fetchReviewsByRestId = (restId) => (dispatch) => {
    return ReviewsApiUtil.fetchReviewsByRestId(restId).then(reviews => dispatch(receivedReviews(reviews)))
}

export const fetchReview = (reviewId) => (dispatch) => {
    return ReviewsApiUtil.fetchReview(reviewId).then(review => dispatch(receivedReview(review)))
}

export const createReview = (review) => (dispatch) => {
    return ReviewsApiUtil.createReview(review).then(review => dispatch(receivedReview(review)), (error) =>
        dispatch(receivedErrors(error.responseJSON)))
}

export const updateReview = (review) => (dispatch) => {
    return ReviewsApiUtil.updateReview(review).then(review => dispatch(receivedReview(review)), (error) => 
        dispatch(receivedErrors(error.responseJSON)))
}

export const destroyReview = (review) => (dispatch) => {
    return ReviewsApiUtil.destroyReview(review).then(review => dispatch(destroyedReview(review)));
}