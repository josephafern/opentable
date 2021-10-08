import React from 'react';
import RestaurantSearchContainer from './restaurant_search/search_container';
import SplashIndexContainer from '../components/splash_index/splash_index_container'

class Splash extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className='splash'>
                <RestaurantSearchContainer history={this.props.history}/>
                <img src={window.bannerUrl} className='hero-img'/>
                <SplashIndexContainer />
                <div className='page-back'></div>
            </div>
        );
    }
}

export default Splash;