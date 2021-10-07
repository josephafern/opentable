import React from 'react';
import { Link } from 'react-router-dom';
import Reservation from './reservation';
import UserReview from './user_review';

class UserShow extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchRestaurants().then(() => this.props.fetchBookingsByUser(this.props.match.params.id))
        .then(()=> this.props.fetchReviewsByUser(this.props.match.params.id));
    }

    componentDidUpdate(){
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div className='user-show'>
                <div className='user-header'>
                    Hello, {this.props.user.username}!
                </div>
                <div className='user-res-container'>
                    <div className='user-res-title'>Upcoming Reservations</div>
                    <ul className='user-res-items'>
                        {Object.keys(this.props.reservations).map(key => {
                            return (<Reservation
                                key={key}
                                reservation={this.props.reservations[key]}
                                restaurant={this.props.restaurants[this.props.reservations[key].restaurant_id]}
                                history={this.props.history}
                                userId={this.props.user.id}
                                deleteBooking={this.props.deleteBooking}/>);
                        })}
                    </ul>
                </div>
                <div className='user-res-container'>
                    <div className='user-res-title'>Reviews</div>
                    <ul className='user-res-items'>
                        {this.props.reviews.map(review => {
                            return <UserReview review={review} restaurant={this.props.restaurants[review.restaurant_id]}/>;
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserShow;