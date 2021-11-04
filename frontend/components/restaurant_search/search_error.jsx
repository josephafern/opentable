import React from 'react';
import { IoIosWarning } from 'react-icons/io';

const SearchError = (props) => {
    return (
        <div className='search-error'>
            <IoIosWarning className='search-warning' />
            <span>{props.message}</span>
        </div>
    );
}

export default SearchError;