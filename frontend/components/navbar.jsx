import React from 'react';
import Modal from './modal';


class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            modal: ''
        }
        this.showLogin = this.showLogin.bind(this);
        this.showSignup = this.showSignup.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showLogin = () => {
        this.setState({ show: true, modal: 'login'})
    }

    showSignup = () => {
        this.setState({ show: true, modal: 'signup' })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    render(){
        return (
            <nav className='navbar'>
                <h1>OpenTable</h1>
                <div style={this.props.loggedIn !== null ? {display: 'none'} : {display: 'block'}}>
                    <button className={this.state.show && this.state.modal === 'signup' ? 'modal-btn clicked' : 'modal-btn'} onClick={this.showSignup}>Sign Up</button>
                    <button className={this.state.show && this.state.modal === 'login' ? 'modal-btn clicked' : 'modal-btn'} onClick={this.showLogin}>Sign In</button>
                </div>
                <div style={this.props.loggedIn !== null ? { display: 'block' } : { display: 'none' }}>
                    <button className='modal-btn' onClick={this.props.logoutUser}>Log Out</button>
                </div>
                <Modal show={this.state.show} modal={this.state.modal} hideModal={this.hideModal} />
            </nav>
        );
    }
}

export default Navbar;