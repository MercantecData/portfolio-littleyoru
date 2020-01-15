import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class PetCard extends Component {

    constructor (props) {
        super(props)
    }

    render() {

        return (
            <View style={styles.item}>
                <Image source={this.props.info.picUrl} style={{maxHeight: 100, maxWidth: 100}} />
                <Text>{this.props.info.name}</Text>
                <Text>{this.props.info.race}</Text>
                <Text>{this.props.info.city}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        fontSize: 18
    }
  })

export default PetCard;