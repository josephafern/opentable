import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <h1>OpenTable</h1>
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;