import { connect } from 'react-redux';
import React from 'react';
import RestaurantSearch from './search';
import { clearRestaurants, findRestraurants } from '../../actions/restaurant_actions';
import { receivedErrors } from '../../actions/restaurant_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findRestaurants: (query) => dispatch(findRestraurants(query)),
        sendErrors: (errors) => dispatch(receivedErrors(errors)),
        clearRestaurants: () => dispatch(clearRestaurants()),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSearch)