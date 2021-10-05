import { connect } from 'react-redux';
import React from 'react';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);