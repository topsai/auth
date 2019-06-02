import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {CardSection} from '../components'
import * as actions from '../actions'
import {connect} from 'react-redux'

class Listitem extends Component {
    render() {
        const {titleStyle} = styles;
        return (
            <TouchableWithoutFeedback
            onPress={()=> this.props.selectTech(this.props.tech.id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {this.props.tech.title}
                        </Text>
                    </CardSection>
                    <CardSection>
                        <Text style={titleStyle}>
                            {this.props.tech.title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 38
    }
};

const mapStateToProps = state => {
    console.log(state);
    return {techs: state.techs};
};
export default connect(null, actions)(Listitem);