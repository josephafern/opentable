import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { createReview, fetchReview } from "../../actions/reviews_actions";
import ReviewForm from "./review_form";
import { clearErrors } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.reviews,
        review: null,
        user: state.session.id,
        restaurant: state.entities.restaurants[ownProps.match.params.id],
        formType: 'New'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        fetchRestaurant: (restId) => dispatch(fetchRestaurant(restId)),
        processForm: (review) => dispatch(createReview(review)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);