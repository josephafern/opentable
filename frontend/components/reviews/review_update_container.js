import { connect } from "react-redux";
import { updateBooking } from "../../actions/booking_actions";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { fetchReview, updateReview } from "../../actions/reviews_actions";
import ReviewForm from "./review_form";
import { clearErrors } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.reviews,
        review: state.entities.users[ownProps.match.params.id].reviews[ownProps.match.params.reviewId],
        user: state.session.id,
        restaurant: state.entities.restaurants[state.entities.users[ownProps.match.params.id].reviews[ownProps.match.params.reviewId].restaurant_id],
        formType: 'Update'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        fetchRestaurant: (restId) => dispatch(fetchRestaurant(restId)),
        processForm: (review) => dispatch(updateReview(review)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);