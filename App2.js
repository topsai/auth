import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import Listitem from './src/reducers/Listitem'

// 技术栈

class TeachList extends Component {
    render() {
        console.log('TeachList--->',this);
        return (
                <FlatList
                    data={this.props.techs}
                    renderItem={({item})=> <Listitem tech={item}/>}
                    keyExtractor={(item, index)=>item.title}
                />
        )
    }
}

const mapStateToProps = state => {
    // console.log('TechList-state',state);
    return {techs: state.techs, "a":123};
};
export default connect(mapStateToProps)(TeachList);