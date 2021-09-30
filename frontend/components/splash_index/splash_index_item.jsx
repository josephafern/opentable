import React from 'react';
import { Link } from 'react-router-dom';

const SplashIndexItem = (props) => {
    
    return (
        <Link to={`/restaurants/${props.restaurant.id}`}>
        <div className='splash-index-item'>
            <img className='img-place' src={props.restaurant.image} />
            <p className='res-name'>{props.restaurant.name}</p>
            <br/>
            <div className='res-index-info'>
                <span>{props.restaurant.cuisine}  | </span>
                <span>{props.restaurant.price}</span>
                <br/>
                <span className='index-time'>7:30pm</span>
                <span className='index-time'>8:00pm</span>
            </div>
        </div>
        </Link>
    );
}

export default SplashIndexItem;