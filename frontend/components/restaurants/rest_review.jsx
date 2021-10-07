import React from 'react';
import { BsPersonCircle } from 'react-icons/bs'
import { RiStarSFill } from 'react-icons/ri'

const RestReview = (props) => {
    return (
        <div className='rest-review'>
            <img className='res-item-img' src={props.image} />
            <div className='rest-review-info'>
                <div className='username'><BsPersonCircle className='rest-review-icon'/>{props.author.username ? props.author.username : ''}</div>
                <p className='name'>{props.review.title}</p>
                <div className='rating'><RiStarSFill style={{color: 'gold', width: '22px', height: '22px'}}/>: {props.review.rating}</div>
                <div className='body'>{props.review.body}</div>
            </div>
        </div>
    );
}

export default RestReview;