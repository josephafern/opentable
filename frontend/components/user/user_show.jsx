import React from 'react';
import { Link } from 'react-router-dom'

class UserShow extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <p>ID: {this.props.user.id}</p>
                <p>Username: {this.props.user.username}</p>
                <button onClick={this.props.logoutUser}>Logout</button>
            </div>
        )
    }
}

export default UserShow;