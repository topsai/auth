import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/app3-reducers'
import Login from './src/page/login'


class App extends Component {
    render() {
        return (
            <View>
                <Text>
                    Menu-s
                </Text>
                <Login/>
            </View>
        )
    }
}


export default App;