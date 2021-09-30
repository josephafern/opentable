import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserShowContainer from '../components/user/user_show_container';
import NavbarContainer from './navbar_container';
import Splash from './splash'
import RestaurantShowContainer from './restaurants/restaurant_show_container';

const App = () => (
    <div id='app'>
        <NavbarContainer />
        <Switch>
            <Route exact path='/' component={Splash}/>
            <Route exact path='/restaurants/:id' component={RestaurantShowContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/users/:id" component={UserShowContainer} />
        </Switch>
    </div>

);

export default App;