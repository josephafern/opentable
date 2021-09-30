import { connect } from 'react-redux'
import RestaurantShow from './restaurant_show'
import { fetchRestaurant } from '../../actions/restaurant_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurant: (restId) => dispatch(fetchRestaurant(restId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);