import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        booking: null,
        user: state.session.id,
        restaurant: state.entities.restaurants[ownProps.match.params.restId],
        formType: 'New'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (booking) => dispatch(createBooking(booking)),
        fetchRestaurant: (restId) => dispatch(fetchRestaurant(restId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);