/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Button, Header, Card, CardSection} from './src/components'
import {SiginUpForm, SiginOutForm, SiginForm} from './src/forms'

const Mode = {
    SIGN_IN: Symbol('SIGN_IN'),
    SIGN_UP: Symbol('SIGN_UP'),
    SIGN_OUT: Symbol('SIGN_OUT'),
};

export default class App extends Component {
    state = {model: Mode.SIGN_IN};
    renderContent()
    render() {
        return (
            <View>
                <Header>用户认证</Header>
            </View>
        );
    }
}
