import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator, addNavigationHelpers, createAppContainer} from 'react-navigation';
import {AuthScreen, MenuListScreen, FoodScreen} from '../components';
import {
    createReduxContainer,
    createNavigationReducer,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

export const AppNavigator = createStackNavigator({
    Auth: {screen: AuthScreen},
    MenuList: {screen: MenuListScreen},
    Food: {screen: FoodScreen}
});
const navReducer = createNavigationReducer(AppNavigator);


// export const AppNavigator = createAppContainer(AppNavigator);

const AppWithNavigationStates = ({dispatch, nav}) => (
    <AppNavigator
        navigation={addNavigationHelpers({dispatch, state: nav})}
        screenProps={{tintColor: '#007AFF'}}
    />
);
const AppWithNavigationState = createReduxContainer(AppNavigator);

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);