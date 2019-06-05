/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Button, Header, Card, CardSection} from './src/components';
import {SiginUpForm, SiginOutForm, SiginForm} from './src/forms';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/reducers'
import TeachList from "./App2";

const Mode = {
    SIGN_IN: Symbol('SIGN_IN'),
    SIGN_UP: Symbol('SIGN_UP'),
    SIGN_OUT: Symbol('SIGN_OUT'),
};

export default class App extends Component {
    state = {mode: Mode.SIGN_UP};

    changeState() {
        if (this.state.mode === Mode.SIGN_IN) {
            this.setState({mode: Mode.SIGN_UP})
        } else {
            this.setState({mode: Mode.SIGN_IN})
        }
    }

    renderContent() {
        switch (this.state.mode) {
            case Mode.SIGN_IN:
                return <SiginForm/>;
            case Mode.SIGN_OUT:
                return <SiginOutForm/>;
            case Mode.SIGN_UP:
                return <SiginUpForm/>;
        }
    }

    renderbtn() {
        if (this.state.mode !== Mode.SIGN_OUT) {
            const {viewStyle, buttonStyle, textStyle} = styles;
            return (
                <View style={viewStyle}>
                    <TouchableOpacity
                        style={buttonStyle}
                        onPress={this.changeState.bind(this)}

                    >
                        <Text style={textStyle}>
                            {this.state.mode === Mode.SIGN_IN ? "新用户注册" : "登录"}
                        </Text>
                    </TouchableOpacity>
                </View>
            )

        }

    }

    render() {
        return (


            <View style={{flex: 1}}>
                <Header>用户认证</Header>
                {/*{this.renderContent()}*/}
                {/*{this.renderbtn()}*/}
                <Provider store={createStore(reducers)}>
                    <TeachList/>
                </Provider>
            </View>

        );
    }
}

const styles = {
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonStyle: {
        padding: 16
    },
    textStyle: {
        fontSize: 13,
        color: '#007AFF',
        marginLeft: 16,
        marginRight: 16,
    }
};