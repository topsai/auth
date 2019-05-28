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

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header>asfsaf</Header>
                <ScrollView>
                    <Card>
                        <CardSection style={{padding: 0}}>
                            <Image style={styles.imageStyle}
                                   source={
                                       {
                                           uri: 'https://my-firstrn-text.oss-cn-beijing.aliyuncs.com/images/img.jpg',

                                       }
                                   }>
                            </Image>
                        </CardSection>
                        <CardSection>
                            <Image style={{width: 80, height: 80, borderRadius: 3, marginRight: 8}}
                                   source={
                                       {
                                           uri: 'https://my-firstrn-text.oss-cn-beijing.aliyuncs.com/images/china.jpg',

                                       }
                                   }>

                            </Image>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 20, textAlign: 'center'}}>
                                    Title
                                </Text>
                                <Text style={{marginTop: 8}}>
                                    最早在2007年11月，阿里巴巴（1688.HK）旗下B2B公司曾登录港交所，共募资116亿港元，成为当时中国互联网公司融资规模之最。挂牌上市后，公司股价曾飙涨至发行价的3倍，成为当年的“港股新股王”，近千名阿里员工因此成为百万富翁。
                                </Text>
                                <Text style={{marginTop: 8}}>
                                    但紧接而来的金融危机，使得阿里B2B公司股价一路暴跌；再加上C2C市场扩大、B2C领域再度勃发等多重因素影响，阿里的B2B业务开始成为鸡肋。阿里B2B公司最终在2012年选择私有化，退出香港联交所。
                                </Text>
                            </View>

                        </CardSection>
                        <CardSection style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Button/>
                        </CardSection>
                    </Card>

                </ScrollView>
                <View style={{paddingTop: 18}}/>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    imageStyle: {
        height: 200,
        flex: 1,
        borderRadius: 3,
        overflow: 'hidden'
    }
});
