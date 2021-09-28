import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoTime = this.demoTime.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.hideModal());
    }

    demoTime(e) {
        e.preventDefault();
        this.props.demoUser({username: 'demo_user', password: '123456'}).then(() => this.props.hideModal());
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
        if (this.props.errors.length){
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

    render(){
        return (
            <div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <button className='close' type='button' onClick={this.props.hideModal}>✕</button>
                    <br/><br/>
                    <h2 className='modal-title'>{this.props.formType}</h2>
                    <br/>
                    <div className='errors'>{this.renderErrors()}</div>
                    <div>
                        <label>
                            <input className='modal-input' type="text" value={this.state.username} onChange={this.update('username')} placeholder='Username'/>
                        </label>
                        <br/>
                        <label><br/>
                            <input className='modal-input' type="password" value={this.state.password} onChange={this.update('password')} placeholder='Password'/>
                        </label>
                        <br/><br/>
                        <button className='inner-modal-btn'>{this.props.formType}</button>
                        <br/>
                        <button type='button' onClick={this.demoTime} className='inner-modal-btn'>Demo</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;