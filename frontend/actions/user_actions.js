import * as ReviewsApiUtil from '../util/reviews_api_util'

export const RECEIVED_USERS = 'RECEIVED_USERS';

const receivedUsers = (users) => {
    return {
        type: RECEIVED_USERS,
        users
    }
}

export const fetchAllUsers = () => (dispatch) => {
    return ReviewsApiUtil.fetchAllUsers().then(users => dispatch(receivedUsers(users)))
}