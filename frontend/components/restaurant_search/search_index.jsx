import React from 'react';
import RestaurantSearchContainer from './search_container';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='search-idx'>
                <RestaurantSearchContainer history={this.props.history} index={true} />
                <div className='search-items'>
                    {this.props.restaurants.map((restaurant, i) => {
                        return <SearchIndexItem key={i} restaurant={restaurant} />
                    })}
                </div>
            </div>
        );
    }
}

export default SearchIndex;