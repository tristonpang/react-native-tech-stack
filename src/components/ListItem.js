import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && 
    UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
    componentDidUpdate() { //lifecycle method, called right before components rerender
        LayoutAnimation.spring();
    }


    renderDescription() {
        if (this.props.expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        //console.log(this.props);
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(this.props.library.item.id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{this.props.library.item.title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

//second argument - ownProps - refers to props of the component (that are already passed down)
const mapStateToProps = (state, ownProps) => { 
    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return { expanded };
};
//better to move logic into mapStateToProps

export default connect(mapStateToProps, actions)(ListItem); 
//first argument is mapStateToProps, if it does not exist can use null
//second argument takes in action creators to be bound to this component
