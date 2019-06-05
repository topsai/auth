import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {CardSection} from '../components'
import * as actions from '../actions'
import {connect} from 'react-redux'

class Listitem extends Component {
    render() {
        const {titleStyle} = styles;
        console.log("Listitem--->", this);
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectTech(this.props.tech.title)}
            >
                <View>
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

const mapStateToProps = (state, ownprops) => {
    console.log('-->', ownprops);
    // console.log(ownprops);
    return {a: 111};
};
// mapStateToProps,
// mapDispatchToProps

export default connect(mapStateToProps, actions)(Listitem);