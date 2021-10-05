import React from 'react';
import SplashIndexItem from './splash_index_item';
import LoadingIcon from '../loading_icon';

class SplashIndex extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.fetchRestaurants();
    }

    render(){
        let rendering = !this.props.restaurants[this.props.restaurants.length - 1] ? <LoadingIcon /> :
            (
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
        
        return rendering;
    }
}

export default SplashIndex;

