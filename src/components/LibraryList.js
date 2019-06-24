import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
renderItem(library) {
    //console.log(library);
    return <ListItem library={library} />
}

    render() {
        return (
            <FlatList 
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id.toString()} //function that determines how to generate identifying key for each list element
            />
        );
    }
}

// function used to grab global state from redux store
const mapStateToProps = state => {
    return { libraries: state.libraries }; //object returned here will end up as props to LibraryList component
};

export default connect(mapStateToProps)(LibraryList);
