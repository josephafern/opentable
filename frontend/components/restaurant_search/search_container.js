import { connect } from 'react-redux';
import React from 'react';
import RestaurantSearch from './search';
import { findRestraurants } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findRestaurants: (query) => dispatch(findRestraurants(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSearch)