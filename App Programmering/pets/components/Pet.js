import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
//import snowball from '../assets/pets/Snowball.jpg'

class Pet extends Component {

    constructor (props) {
        super(props)
    }

    render() {

        return (
            <View style={styles.item}>
                <Image source={this.props.info.picUrl} style={{height: 100, width: 100}} />
                <Text>{this.props.info.name}</Text>
                <Text>{this.props.info.race}</Text>
                <Text>{this.props.info.city}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 1,
        padding: 16,
        fontSize: 18,
        alignSelf: 'flex-start'
    }
  })

export default Pet;