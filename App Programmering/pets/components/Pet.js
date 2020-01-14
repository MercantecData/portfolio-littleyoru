import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import snowball from '../assets/pets/Snowball.jpg'

class Pet extends Component {

    constructor (props) {
        super(props)
    }

    render() {
        let testPet = {
            name: 'Snowball',
            sex: 'M',
            race: 'Russian Blue',
            age: 0.25, // in years
            isAdult: false,
            type: 'cat',
            sterilised: false,
            picUrl: snowball
        };

        return (
            <View>
                <Image source={testPet.picUrl} style={{height: 100, width: 100}} />
                <Text>{testPet.name}</Text>
                <Text>{testPet.race}</Text>
            </View>
        );
    }
}

export default Pet;