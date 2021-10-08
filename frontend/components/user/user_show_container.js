import { connect } from 'react-redux';
import React from 'react';
import UserShow from './user_show'
import { logout } from '../../actions/session_actions'
import { fetchBookingsByUser } from '../../actions/booking_actions';
import { destroyBooking } from '../../actions/booking_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { destroyReview } from '../../actions/reviews_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        restaurants: state.entities.restaurants
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logout()),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchRestaurants: () => dispatch(fetchRestaurants()),
        deleteBooking: (booking) => dispatch(destroyBooking(booking)),
        deleteReview: (review) => dispatch(destroyReview(review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)