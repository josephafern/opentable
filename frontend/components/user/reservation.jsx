import React from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { BsTrashFill } from 'react-icons/bs'
import { convertTime } from '../../util/converters';

const Reservation = (props) => {
    
    return (
        <div className='user-res-item'>
            <img className='res-item-img' src={props.restaurant.image}/>
            <div className='res-item-info'>
                <Link className='res-rest-name' to={`/restaurants/${props.restaurant.id}`}>{props.restaurant.name}</Link>
            <li >{props.reservation.date} at {props.reservation.time}</li>
            <li >Guests: {props.reservation.guests}</li>
            <div className='res-item-btn'>
                    <Link to={`/users/${props.userId}/bookings/${props.reservation.id}`}><MdModeEdit style={{ color: '#247f9e'}}/></Link>
                    <div style={{ cursor: 'pointer', 'marginLeft': '10px' }}><BsTrashFill style={{ color: '#247f9e' }}onClick={() => props.deleteBooking(props.reservation)
                        .then(() => props.history.push(`/users/${props.userId}`))} /></div>
            
            </div>
            </div>
        </div>
    );
}

export default Reservation; 