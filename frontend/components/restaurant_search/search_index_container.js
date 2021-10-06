import { connect } from "react-redux";
import SearchIndex from "./search_index";
import { findRestraurants } from "../../actions/restaurant_actions";

const mapStateToProps = (state) => {
    return {
        restaurants: Object.values(state.entities.restaurants)
    }
}

export default connect(mapStateToProps, null)(SearchIndex);