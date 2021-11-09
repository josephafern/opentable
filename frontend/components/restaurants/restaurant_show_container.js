import { connect } from 'react-redux'
import RestaurantShow from './restaurant_show'
import { fetchRestaurant } from '../../actions/restaurant_actions'
import { fetchAllUsers } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.id],
        users: state.entities.users,
        currentUser: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurant: (restId) => dispatch(fetchRestaurant(restId)),
        fetchAllUsers: () => dispatch(fetchAllUsers())
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);