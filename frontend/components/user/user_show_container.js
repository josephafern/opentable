import { connect } from 'react-redux';
import React from 'react';
import UserShow from './user_show'
import { logout } from '../../actions/session_actions'
import { fetchBookingsByUser } from '../../actions/booking_actions';
import { destroyBooking } from '../../actions/booking_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { fetchReviewsByUser } from '../../actions/reviews_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        reservations: state.entities.bookings,
        restaurants: state.entities.restaurants,
        reviews: Object.values(state.entities.reviews)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logout()),
        fetchBookingsByUser: (userId) => dispatch(fetchBookingsByUser(userId)),
        fetchReviewsByUser: (userId) => dispatch(fetchReviewsByUser(userId)),
        fetchRestaurants: () => dispatch(fetchRestaurants()),
        deleteBooking: (booking) => dispatch(destroyBooking(booking))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)