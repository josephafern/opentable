import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


class Modal extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.modal === 'login'){
            return (
                <div>
                <div className={this.props.show ? 'modal-back' : 'modal-back hide'}></div>
                <div className={this.props.show ? 'modal-show' : 'modal-hide'}>
                    <LoginFormContainer hideModal={this.props.hideModal}/>
                   
                </div>
                </div >
            );
        } else {
            return (
                <div>
                <div className={this.props.show ? 'modal-back' : 'modal-back hide'}></div>
                <div className={this.props.show ? 'modal-show' : 'modal-hide'}>
                    <SignupFormContainer hideModal={this.props.hideModal}/>
                    
                </div>
                </div>
            );
        }
        
    }
}

export default Modal;