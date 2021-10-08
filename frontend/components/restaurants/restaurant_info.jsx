import React from 'react';
import RestReview from './rest_review';
import { Link } from 'react-router-dom';

const RestaurantInfo = (props) => {
    
    return (
        <div className='info-container'>
            <header>{props.restaurant.name}</header>
            <span>{props.restaurant.cuisine}  |  <span className='price'>{props.restaurant.price}</span></span>
            <p className='rest-desc'>{props.restaurant.description}</p>
            <div className='rest-reviews'>
                <h4>What people are saying:</h4>
                {props.restaurant.reviews ? Object.values(props.restaurant.reviews).map(review => {
                    return <RestReview image={props.restaurant.image} review={review} author={props.users[review.author_id]}/>;
                }) : ''}
            </div>
            <Link to={`/restaurants/${props.restaurant.id}/reviews/new`}><button className='reserve-btn centered'>Write a review!</button></Link>
        </div>
    );
}

export default RestaurantInfo;