import React from 'react';
import { Link } from 'react-router-dom';

const Booking = (props) => {
    return (
            <div>
            <div className='reserve-container'>
            <div className='m-a-r'>Make a reservation!!</div>
            <p>Some available times:</p>
            <div className='presets-container'>
                <Link style={{ textDecoration: 'none' }} to={`/restaurants/${props.restId}/bookings/new/19:45`}><div className='mar-preset'>7:45pm</div></Link>
                <Link style={{ textDecoration: 'none' }} to={`/restaurants/${props.restId}/bookings/new/20:30`}><div className='mar-preset'>8:30pm</div></Link>
                <Link style={{ textDecoration: 'none' }} to={`/restaurants/${props.restId}/bookings/new/21:15`}><div className='mar-preset'>9:15pm</div></Link>
            </div>
            {props.loggedIn ? <Link to={`/restaurants/${props.restId}/bookings/new`}><button className='reserve-btn'>Find a table!</button></Link> : null}
            </div>
            <div className={props.loggedIn === null ? 'signup-message' : 'signup-message hidden'}>
                To make a reservation, please sign up or sign in.
            </div>
            </div>
       
    );
}

export default Booking;
