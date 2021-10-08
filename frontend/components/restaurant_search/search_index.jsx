import React from 'react';
import RestaurantSearchContainer from './search_container';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        if (!this.props.restaurants.length){
            return (
                <div className='search-idx'>
                    <div>Oops! We couldn't find any matching that query.</div>
                    <RestaurantSearchContainer index={true} />
                </div>
            );
        }
        return (
            <div className='search-idx'>
                <RestaurantSearchContainer history={this.props.history} index={true}/>
                <div className='search-items'>
                {this.props.restaurants.map(restaurant => {
                    return <SearchIndexItem key={restaurant.id} restaurant={restaurant}/>
                })}
                </div>
            </div>
        );
    }
}

export default SearchIndex;