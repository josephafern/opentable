import React from 'react';

const RestaurantInfo = (props) => {
    return (
        <div className='info-container'>
            <header>{props.restaurant.name}</header>
            <span>{props.restaurant.cuisine}  |  <span className='price'>{props.restaurant.price}</span></span>
            <p className='rest-desc'>{props.restaurant.description}</p>
        </div>
    );
}

export default RestaurantInfo;