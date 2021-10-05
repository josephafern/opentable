import { connect } from 'react-redux';
import React from 'react';
import UserShow from './user_show'
import { logout } from '../../actions/session_actions'
import { fetchBookingsByUser } from '../../actions/booking_actions';
import { destroyBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        reservations: state.entities.bookings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logout()),
        fetchBookingsByUser: (userId) => dispatch(fetchBookingsByUser(userId)),
        deleteBooking: (booking) => dispatch(destroyBooking(booking))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)