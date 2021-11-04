import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = (props) => {
    return (

        <Link className='search-item' style={{ textDecoration: 'none' }} to={`/restaurants/show/${props.restaurant.id}`}>
            <img className='search-item-img' src={props.restaurant.image} />
            <div className='s-item-info'>
                <div className='s-item-name'>{props.restaurant.name}</div>
                <div className='s-item-extra'>{props.restaurant.cuisine} | <span>{props.restaurant.price}</span></div>
            </div>
        </Link>

    );
}

export default SearchIndexItem;