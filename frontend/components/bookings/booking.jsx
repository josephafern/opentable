import React from 'react';
import { Link } from 'react-router-dom';

const Booking = (props) => {
    return (
        <Link to={`/restaurants/${props.restId}/bookings/new`}>
            <div className='reserve-container'>
                Make a reservation!!
            </div>
        </Link>
    );
}

export default Booking;