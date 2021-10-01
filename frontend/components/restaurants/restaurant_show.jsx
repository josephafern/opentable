import React from 'react';
import RestaurantInfo from './restaurant_info';

class RestaurantShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.fetchRestaurant(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchRestaurant(this.props.match.params.id)
        }
    }

    render(){
        if (!this.props.restaurant) return null;
        return (
            <div>
                <img className='res-show-img' src={this.props.restaurant.image}/>
                <div className='show-container'>
                    <RestaurantInfo restaurant={this.props.restaurant}/>
                    <div className='reserve-container'>Make a reservation</div>
                </div>
            </div>
        );
    }
}

export default RestaurantShow;