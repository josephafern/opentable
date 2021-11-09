import React from 'react';
import RestaurantInfo from './restaurant_info';
import Booking from '../bookings/booking';
import Modal from '../modal'

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchAllUsers()
            .then(() => this.props.fetchRestaurant(this.props.match.params.id));
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.id !== this.props.match.params.id ) {
    //         this.props.fetchAllUsers()
    //             .then(() => this.props.fetchRestaurant(this.props.match.params.id));
    //     }
    // }

    render() {
        if (!this.props.restaurant) return null;
        return (
            <div className='rest-show'>
                <img className='res-show-img' src={this.props.restaurant.image} />
                <div className='show-container'>
                    <RestaurantInfo users={this.props.users} restaurant={this.props.restaurant} currentUser={this.props.currentUser} />
                    <Booking restId={this.props.restaurant.id} loggedIn={this.props.currentUser} />
                </div>
                <div className='page-back'></div>
                
            </div>
        );
    }
}

export default RestaurantShow;