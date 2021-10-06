import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FaChair } from 'react-icons/fa';

class RestaurantSearch extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.findRestaurants(this.state.query).then(
            () => this.props.history.push(`/restaurants/search/${this.state.query}`)
        );
    }

    update(e){
        e.preventDefault();
        this.setState({ query: e.target.value });
    }

    render(){
        return (
            
            
            <div className={this.props.index ? 'search-container addon':'search-container'}>
                <h1 className={this.props.index ? 'hidden' : ''}>Find a chair <FaChair className='search-title-icon'/> for any occasion!</h1>
                <form className='search-form' onSubmit={this.handleSubmit}>
                    <label>
                        <input className='search-input' type='search' onChange={this.update} placeholder='Search by restaurant name or cuisine-type'/>
                    </label>
                    <button className='search-btn'>Let's go<BiSearchAlt className='search-btn-img' /></button>
                </form>
            </div>
        );
    }
}

export default RestaurantSearch;