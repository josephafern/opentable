import React from 'react';
import SplashIndexItem from './splash_index_item';

class SplashIndex extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.fetchRestaurants();
    }

    render(){
        return (
            <div className='splash-index'>
                {
                    this.props.restaurants.map(
                        (restaurant) => {
                            
                            return <SplashIndexItem restaurant={restaurant} key={restaurant.id} />
                        }
                    )
                }
            </div>
        );
    }
}

export default SplashIndex;

