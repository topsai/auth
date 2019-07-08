import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppNavigationWithState from './navigators/AppNavigator';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// var wilddog = require('wilddog');

const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);
const store = createStore(
    reducers,
    applyMiddleware(middleware),
);


class App extends Component {
    // componentWillMount() {
    //   wilddog.initializeApp({
    //     authDomain: "wd1607116684hnxnbz.wilddog.com"
    //   });
    // }


    render() {
        return (
            <Provider store={store} storess={createStore(reducers, {}, applyMiddleware(thunk))}>
                <AppNavigationWithState/>
            </Provider>
        );
    }
}

export default App;