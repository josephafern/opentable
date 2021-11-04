import React from 'react';
import { Link } from 'react-router-dom';
import Reservation from './reservation';
import UserReview from './user_review';

class UserShow extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
       
        this.props.fetchRestaurants().then(() => this.props.fetchUser(this.props.match.params.id));
    }

    componentDidUpdate(){
        window.scrollTo(0, 0);
    }

    render(){
        if (!this.props.user) return null;
        if (Object.keys(this.props.restaurants).length < 20) return null;
        return (
            <div className='user-show'>
                <div className='user-header'>
                    Hello, {this.props.user.username}!
                </div>
                <div className='user-res-container'>
                    <div className='user-res-title'>Upcoming Reservations</div>
                    <ul className='user-res-items'>
                        {this.props.user.reservations ? Object.values(this.props.user.reservations).map((reservation, i) => {
                            return (<Reservation
                                key={i}
                                reservation={reservation}
                                restaurant={this.props.restaurants[reservation.restaurant_id]}
                                history={this.props.history}
                                userId={this.props.user.id}
                                deleteBooking={this.props.deleteBooking}/>);
                        }) : ''}
                    </ul>
                </div>
                <div className='user-res-container'>
                    <div className='user-res-title'>Reviews</div>
                    <ul className='user-res-items'>
                        {this.props.user.reviews ? Object.values(this.props.user.reviews).map((review, i) => {
                            return <UserReview  key={i} 
                                                review={review}
                                                userId={this.props.user.id}
                                                history={this.props.history}
                                                restaurant={this.props.restaurants[review.restaurant_id]}
                                                deleteReview={this.props.deleteReview}/>;
                        }) : ''}
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserShow;