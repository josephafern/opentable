import { connect } from 'react-redux';
import React from 'react';
import UserShow from './user_show'
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)