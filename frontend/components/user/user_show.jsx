import React from 'react';
import { Link } from 'react-router-dom'

class UserShow extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div className='user-show'>
                <p>ID: {this.props.user.id}</p>
                <p>Username: {this.props.user.username}</p>
                <button onClick={this.props.logoutUser}>Logout</button>
            </div>
        )
    }
}

export default UserShow;