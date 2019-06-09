import React, {Component} from 'react';
import {View, FlatList, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import Listitem from './src/reducers/Listitem'
import * as actions from './src/actions'

// 技术栈

class TeachList extends Component {
    render() {
        console.log('TeachList--->', this);
        return (
            <View>
                <FlatList
                    data={this.props.techs}
                    renderItem={({item}) => <Listitem tech={item}/>}
                    keyExtractor={(item, index) => item.title}
                />
                <Button title={this.props.tk} onPress={() => this.props.logIn('asf', 'asf')}/>
                <Button title='logout' onPress={() => this.props.logOut()}/>
            </View>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    console.log('app2.props', ownprops, state);
    // console.log('TechList-state',state);
    return {techs: state.techs, "a": 123666, tk: state.token};
};
export default connect(mapStateToProps, actions)(TeachList);