import React from 'react';
import RestaurantInfo from './restaurant_info';
import Booking from '../bookings/booking';

class RestaurantShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.fetchRestaurant(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchRestaurant(this.props.match.params.id)
        }
    }

    render(){
        if (!this.props.restaurant) return null;
        return (
            <div className='rest-show'>
                <img className='res-show-img' src={this.props.restaurant.image}/>
                <div className='show-container'>
                    <RestaurantInfo restaurant={this.props.restaurant}/>
                    <Booking restId={this.props.restaurant.id} loggedIn={this.props.currentUser}/>
                </div>
            </div>
        );
    }
}

export default RestaurantShow;