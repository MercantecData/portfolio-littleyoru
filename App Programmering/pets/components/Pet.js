import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Pet extends Component {
    render() {

        let testPet = {
            name: 'Snowball',
            sex: 'M',
            race: 'Russian Blue',
            age: 0.25, // in years
            isAdult: false,
            type: 'cat',
            sterilised: false,
            picUrl: '../assets/pets/Snowball.jpg'
        };

        return (
            <View>
                <Image source={testPet.picUrl} style={{height: 100, width: 100}} />
                {testPet.name}
                {testPet.race}
            </View>
        );
    }
}

export default Pet;