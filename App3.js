import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/app3-reducers'


class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Menu
                    </Text>
                </View>
            </Provider>
        )
    }

}


export default App;