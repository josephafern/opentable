import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        link: <Link to="/login">login instead</Link>,
    }
}

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);