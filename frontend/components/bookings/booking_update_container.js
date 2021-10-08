import { connect } from "react-redux";
import BookingForm from "./booking_form";
import { updateBooking } from "../../actions/booking_actions";
import { fetchRestaurant } from "../../actions/restaurant_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        booking: state.entities.users[ownProps.match.params.id].reservations[ownProps.match.params.bookingId],
        user: state.session.id,
        restaurant: state.entities.restaurants[state.entities.users[ownProps.match.params.id].reservations[ownProps.match.params.bookingId].restaurant_id],
        formType: 'Update'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (booking) => dispatch(updateBooking(booking)),
        fetchRestaurant: (restId) => dispatch(fetchRestaurant(restId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);