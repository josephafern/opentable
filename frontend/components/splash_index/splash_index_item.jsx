import React from 'react';
import { Link } from 'react-router-dom';

const SplashIndexItem = (props) => {

    return (
        <Link className='link' to={`/restaurants/show/${props.restaurant.id}`}>
            <div className='splash-index-item'>
                <img className='img-place' src={props.restaurant.image} />
                <p className='res-name'>{props.restaurant.name}</p>
                <br />
                <div className='res-index-info'>
                    <span>{props.restaurant.cuisine}  |  {props.restaurant.price}</span>

                    <br />
                    <div className='index-time-container'>
                        <Link style={{ textDecoration: 'none' }} to={`/restaurants/${props.restaurant.id}/bookings/new/19:45`}><span className='index-time'>7:45pm</span></Link>
                        <Link style={{ textDecoration: 'none' }} to={`/restaurants/${props.restaurant.id}/bookings/new/20:00`}><span className='index-time'>8:00pm</span></Link>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default SplashIndexItem;