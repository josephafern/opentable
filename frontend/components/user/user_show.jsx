import React from 'react';
import { Link } from 'react-router-dom'

class UserShow extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchBookingsByUser(this.props.match.params.id);
    }

    render(){
        return (
            <div className='user-show'>
                <p>ID: {this.props.user.id}</p>
                <p>Username: {this.props.user.username}</p>
                <ul>
                    {Object.keys(this.props.reservations).map(key => {
                        return (
                        <div>
                        <li >{this.props.reservations[key].date}</li>
                        <li >{this.props.reservations[key].time}</li>
                        <li >{this.props.reservations[key].guests}</li>
                        <Link to={`/users/${this.props.user.id}/bookings/${key}`}><button>Update</button></Link>
                                <button onClick={() => this.props.deleteBooking(this.props.reservations[key])
                                    .then(() =>this.props.history.push(`/users/${this.props.user.id}`))}>Delete</button>
                        </div>);
                    })}
                </ul>
            </div>
        )
    }
}

export default UserShow;