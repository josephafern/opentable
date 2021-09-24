import * as SessionsAPIUtil from '../util/session_api_util'
export const RECEIVED_CURRENT_USER = 'RECEIVED_CURRENT_USER';
export const RECEIVED_SESSION_ERRORS = 'RECEIVED_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const login = (user) => (dispatch) => (
    SessionsAPIUtil.login(user).then((user) => (
        dispatch(receivedCurrentUser(user))
    ), (error) => (
        dispatch(receivedErrors(error.responseJSON))
    ))
);

export const logout = () => (dispatch) => (
    SessionsAPIUtil.logout().then((user) => (
        dispatch(receivedCurrentUser(null))
    ))
);

export const signup = (user) => (dispatch) => {
    return SessionsAPIUtil.signup(user).then(user => (
        dispatch(receivedCurrentUser(user))
    ), (error) => (
        dispatch(receivedErrors(error.responseJSON))
    ))
}

export const receivedCurrentUser = (current) => {
    return {
        type: RECEIVED_CURRENT_USER,
        current
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receivedErrors = (errors) => {
    return {
        type: RECEIVED_SESSION_ERRORS,
        errors
    }
}