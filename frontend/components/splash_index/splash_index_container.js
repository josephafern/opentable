import { connect } from 'react-redux';

import { fetchRestaurants } from '../../actions/restaurant_actions';
import { allRestaurants } from '../../util/selectors';

import SplashIndex from './splash_index';

const mapStateToProps = (state) => {
    return {
        restaurants: allRestaurants(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashIndex)