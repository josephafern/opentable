import React from 'react';
import { RiStarSFill } from 'react-icons/ri'
import { MdModeEdit } from 'react-icons/md';
import { BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const UserReview = (props) => {
    return (
        <div className='user-review'>
            <img className='res-item-img' src={props.restaurant.image} />
            <div className='rest-review-info'>
                <Link className='username' to={`/restaurants/${props.restaurant.id}`}><div>{props.restaurant.name}</div></Link>
                <p className='name'>{props.review.title}</p>
                <div className='rating'><RiStarSFill style={{ color: 'gold', width: '22px', height: '22px' }} />: {props.review.rating}</div>
                <div className='body'>{props.review.body}</div>
                <div className='rev-item-btn'>
                    <Link to={`/users/${props.userId}/reviews/${props.review.id}/edit`}><MdModeEdit style={{ width: '16px', height: '16px', color: '#247f9e' }} /></Link>
                    <div style={{ cursor: 'pointer', marginLeft: '10px' }}><BsTrashFill style={{ width: '16px', height: '16px', color: '#247f9e' }} onClick={() => props.deleteReview(props.review)
                        .then(() => props.history.push(`/users/${props.userId}`))}/></div>
                </div>
            </div>
        </div>
    );
}

export default UserReview;