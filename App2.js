import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import Listitem from './src/reducers/Listitem'

class TeachList extends Component {

    render() {
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
    console.log(state);
    return {techs: state.techs};
};
export default connect(mapStateToProps)(TeachList);