import React from 'react';

class BookingForm extends React.Component {
    constructor(props){
        super(props);
        let currDate = new Date();
        this.state = {
            id: this.props.match.params.bookingId,
            maker_id: this.props.user,
            restaurant_id: parseInt(this.props.restaurant.id),
            date: currDate.toISOString().slice(0, 10),
            time: this.props.match.params.time ? this.props.match.params.time : '19:30',
            guests: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchRestaurant(this.props.restaurant.id);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            let ele = document.getElementById('booking-feedback');
            let ele2 = document.getElementById('booking-form-back');
            let ele3 = document.getElementById('res-btn');
            ele.style = 'display: block';
            ele2.style = 'visibility: visible;';
            ele3.style = 'border-color: #da3743; background-color: #da3743; color: white;';
        })
        .then(booking =>
            setTimeout(() => {
                this.props.history.push(`/users/${this.props.user}`)
            }, 1500));
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    render(){
        if (!this.props.restaurant) return null;
        let currDate = new Date();
        return (
            <div className='booking-form-overall'>
            <div className='booking-container'>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.restaurant.name}</h2>
                    <div className='date-time'>
                    <label className='num-guests'><span>Guests</span>
                        <input type='number' value={this.state.guests} onChange={this.update('guests')} min='1' max='6'/>
                    </label><br/>
                    <label className='num-guests'><span>Date</span>
                        <input type='date' value={this.state.date} onChange={this.update('date')} min={currDate.toISOString().slice(0, 10)}/>
                    </label><br />
                    <label className='num-guests'><span>Time</span>
                        <input type='time' step='900' value={this.state.time} onChange={this.update('time')}/>
                    </label>
                    </div>
                    <br/>
                        {this.props.formType === 'New' ? <button id='res-btn'>Reserve!</button> : <button id='res-btn'>Update!</button>}
                </form>
            </div>
            <img src={this.props.restaurant.image} className='hero-img'/>
            <div id='booking-feedback'>Success! You're booked.</div>
            <div id='booking-form-back'></div>
            </div>
        );
    }
}

export default BookingForm;