import * as ReviewsApiUtil from '../util/users_api_util'

export const RECEIVED_USERS = 'RECEIVED_USERS';
export const RECEIVED_USER = 'RECEIVED_USER';

const receivedUsers = (users) => {
    return {
        type: RECEIVED_USERS,
        users
    }
}

const receivedUser = (user) => {
    return {
        type: RECEIVED_USER,
        user
    }
}

export const fetchAllUsers = () => (dispatch) => {
    return ReviewsApiUtil.fetchAllUsers().then(users => dispatch(receivedUsers(users)))
}

export const fetchUser = (userId) => (dispatch) => {
    return ReviewsApiUtil.fetchUser(userId).then(user => dispatch(receivedUser(user)))
}