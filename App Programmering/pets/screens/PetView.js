import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Pet from '../components/Pet';

class PetView extends Component {
    // create the title for the screen
    static navigationOptions = {
        title : "PetView"
    }
    
    constructor(props) {
        super(props)
    }

    render() {
        let title = 'Pet list'
        return (
            <View>
                <Text>{title}</Text>
                <Pet />
            </View>
        );
    }
}

export default PetView;