import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserShowContainer from '../components/user/user_show_container';
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash'
import RestaurantShowContainer from './restaurants/restaurant_show_container';
import BookingFormContainer from './bookings/booking_form_container';
import BookingUpdate from './bookings/booking_update_container';
import SearchIndexContainer from './restaurant_search/search_index_container';
import ReviewFormContainer from './reviews/review_form_container';
import ReviewUpdateContainer from './reviews/review_update_container';
import Footer from './footer';

const App = () => (
    <div id='app'>
        <NavbarContainer />
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/restaurants/search/:query' component={SearchIndexContainer} />
            <Route exact path='/restaurants/search' component={SearchIndexContainer} />
            <Route exact path='/restaurants/show/:id' component={RestaurantShowContainer} />
            <ProtectedRoute exact path='/restaurants/:restId/bookings/new' component={BookingFormContainer} />
            <ProtectedRoute exact path='/restaurants/:restId/bookings/new/:time' component={BookingFormContainer} />
            <ProtectedRoute exact path='/restaurants/:id/reviews/new' component={ReviewFormContainer} />
            <ProtectedRoute exact path='/users/:id/reviews/:reviewId/edit' component={ReviewUpdateContainer} />
            <ProtectedRoute exact path='/users/:id' component={UserShowContainer} />
            <ProtectedRoute exact path='/users/:id/bookings/:bookingId' component={BookingUpdate} />
        </Switch>
        <Footer />
    </div>
);

export default App;