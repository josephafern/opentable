import React from 'react';
import { RiStarSFill } from 'react-icons/ri'


const UserReview = (props) => {
    return (
        <div className='user-review'>
            <img className='res-item-img' src={props.restaurant.image} />
            <div className='rest-review-info'>
                <div className='username'>{props.restaurant.name}</div>
                <p className='name'>{props.review.title}</p>
                <div className='rating'><RiStarSFill style={{ color: 'gold', width: '22px', height: '22px' }} />: {props.review.rating}</div>
                <div className='body'>{props.review.body}</div>
            </div>
        </div>
    );
}

export default UserReview;