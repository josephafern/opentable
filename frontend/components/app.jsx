import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>OpenTable</h1>
        </header>
        <Switch>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>

);

export default App;