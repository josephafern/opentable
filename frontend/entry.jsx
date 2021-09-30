import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';
import { fetchRestaurant } from './actions/restaurant_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                id: window.currentUser.id
            }
        };
    }
    const store = configureStore(preloadedState);
    window.store = store;
    window.fetchRestaurant = fetchRestaurant;
    ReactDOM.render(<Root store={store}/>, root);
})