import React from 'react';
import { Link } from 'react-router-dom';

const Booking = (props) => {
    return (
        
            <div className='reserve-container'>
            <div className='m-a-r'>Make a reservation!!</div>
            <p>Some available times:</p>
            <div className='presets-container'>
                <Link style={{ textDecoration: 'none' }} to={`/restaurants/${props.restId}/bookings/new/19:45`}><div className='mar-preset'>19:45</div></Link>
                <Link style={{ textDecoration: 'none' }} to={`/restaurants/${props.restId}/bookings/new/20:30`}><div className='mar-preset'>20:30</div></Link>
                <Link style={{ textDecoration: 'none' }} to={`/restaurants/${props.restId}/bookings/new/21:15`}><div className='mar-preset'>21:15</div></Link>
            </div>
            <Link to={`/restaurants/${props.restId}/bookings/new`}><button className='reserve-btn'>Find a table!</button></Link>
            </div>
       
    );
}

export default Booking;

//Search MVP