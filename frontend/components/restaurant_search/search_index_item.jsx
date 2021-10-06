import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = (props) => {
    return (
        <Link to={`/restaurants/${props.restaurant.id}`}>
        <div>
            <ul>
                <li>{props.restaurant.name}</li>
            </ul>
        </div>
        </Link>
    );
}

export default SearchIndexItem;