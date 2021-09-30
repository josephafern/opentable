import React from 'react';

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
                <img src={this.props.restaurant.image}/>
            </div>
        );
    }
}

export default RestaurantShow;