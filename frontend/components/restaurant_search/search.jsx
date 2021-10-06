import React from 'react';

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
            <div className='search-container'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type='search' onChange={this.update}/>
                    </label>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default RestaurantSearch;