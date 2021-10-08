import React from 'react';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.reviewId,
            author_id: this.props.user,
            restaurant_id: parseInt(this.props.restaurant.id),
            rating: this.props.review ? this.props.review.rating : 5,
            title: this.props.review ? this.props.review.title : '',
            body: this.props.review ? this.props.review.body : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.formType !== 'New'){
            this.props.fetchReview(this.props.match.params.reviewId).then(() => this.props.fetchRestaurant(this.props.restaurant.id))
            .then(() => this.props.clearErrors());
        } else {
            this.props.fetchRestaurant(this.props.restaurant.id).then(() => this.props.clearErrors());
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => this.props.clearErrors()).then(() => {
            let ele = document.getElementById('booking-feedback');
            let ele2 = document.getElementById('booking-form-back');
            let ele3 = document.getElementById('rev-btn');
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

    renderErrors() {
        if (this.props.errors.length) {
            return (
                <div>
                    {this.props.errors.map((error, i) => (
                        <p key={`error-${i}`}>
                            {error}
                        </p>
                    ))}
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        if (!this.props.restaurant) return null;
        return (
            <div className='booking-form-overall'>
                <div className='review-container'>
                    <form onSubmit={this.handleSubmit}>
                        <h5>{this.props.restaurant.name}</h5>
                        <div className='errors'>{this.renderErrors()}</div>
                        <div className='date-time rev-info'>
                            <label className='num-guests'><span>Rating</span>
                                <input type='number' value={this.state.rating} onChange={this.update('rating')} min='1' max='5' />
                            </label><br />
                            <label className='num-guests'><span>Title</span>
                                <input type='text' value={this.state.title} onChange={this.update('title')} />
                            </label><br />
                            <label className='num-guests'><span className='body-header'>Body</span>
                                <textarea value={this.state.body} onChange={this.update('body')}></textarea>
                                
                            </label>
                        </div>
                        <br />
                        {this.props.formType === 'New' ? <button id='rev-btn'>Create!</button> : <button id='rev-btn'>Update!</button>}
                    </form>
                </div>
                <img src={this.props.restaurant.image} className='hero-img' />
                <div id='booking-feedback'>{this.props.formType === 'New' ? 'Success! Review created.' : 'Success! Review updated.'}</div>
                <div id='booking-form-back'></div>
                <div className='page-back'></div>
            </div>
        );
    }
}

export default ReviewForm;