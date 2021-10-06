import React from 'react';
import RestaurantSearchContainer from './search_container';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className='search-idx'>
                <RestaurantSearchContainer/>
                {this.props.restaurants.map(restaurant => {
                    return <SearchIndexItem key={restaurant.id} restaurant={restaurant}/>
                })}
            </div>
        );
    }
}

export default SearchIndex;