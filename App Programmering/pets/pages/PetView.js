import React, { Component } from 'react';
import { View } from 'react-native';
import { Pet } from '../components/Pet';

class PetView extends Component {
    render() {
        let title = 'Pet list'
        return (
            <View>
                {title}
                <Pet />
            </View>
        );
    }
}

export default PetView;